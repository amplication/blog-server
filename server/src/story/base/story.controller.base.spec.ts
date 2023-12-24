import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { StoryController } from "../story.controller";
import { StoryService } from "../story.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  content: "exampleContent",
  createdAt: new Date(),
  customerName: "exampleCustomerName",
  draft: "true",
  featuredImage: "exampleFeaturedImage",
  id: "exampleId",
  metaDescription: "exampleMetaDescription",
  metaTitle: "exampleMetaTitle",
  publishedAt: new Date(),
  slug: "exampleSlug",
  tag: "exampleTag",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  content: "exampleContent",
  createdAt: new Date(),
  customerName: "exampleCustomerName",
  draft: "true",
  featuredImage: "exampleFeaturedImage",
  id: "exampleId",
  metaDescription: "exampleMetaDescription",
  metaTitle: "exampleMetaTitle",
  publishedAt: new Date(),
  slug: "exampleSlug",
  tag: "exampleTag",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    content: "exampleContent",
    createdAt: new Date(),
    customerName: "exampleCustomerName",
    draft: "true",
    featuredImage: "exampleFeaturedImage",
    id: "exampleId",
    metaDescription: "exampleMetaDescription",
    metaTitle: "exampleMetaTitle",
    publishedAt: new Date(),
    slug: "exampleSlug",
    tag: "exampleTag",
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  content: "exampleContent",
  createdAt: new Date(),
  customerName: "exampleCustomerName",
  draft: "true",
  featuredImage: "exampleFeaturedImage",
  id: "exampleId",
  metaDescription: "exampleMetaDescription",
  metaTitle: "exampleMetaTitle",
  publishedAt: new Date(),
  slug: "exampleSlug",
  tag: "exampleTag",
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  createStory() {
    return CREATE_RESULT;
  },
  stories: () => FIND_MANY_RESULT,
  story: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Story", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StoryService,
          useValue: service,
        },
      ],
      controllers: [StoryController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /stories", async () => {
    await request(app.getHttpServer())
      .post("/stories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publishedAt: CREATE_RESULT.publishedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stories", async () => {
    await request(app.getHttpServer())
      .get("/stories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          publishedAt: FIND_MANY_RESULT[0].publishedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        publishedAt: FIND_ONE_RESULT.publishedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publishedAt: CREATE_RESULT.publishedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stories")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
