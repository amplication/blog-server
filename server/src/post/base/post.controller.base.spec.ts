import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PostController } from "../post.controller";
import { PostService } from "../post.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  content: "exampleContent",
  createdAt: new Date(),
  draft: "true",
  featuredImage: "exampleFeaturedImage",
  id: "exampleId",
  metaDescription: "exampleMetaDescription",
  metaTitle: "exampleMetaTitle",
  slug: "exampleSlug",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  content: "exampleContent",
  createdAt: new Date(),
  draft: "true",
  featuredImage: "exampleFeaturedImage",
  id: "exampleId",
  metaDescription: "exampleMetaDescription",
  metaTitle: "exampleMetaTitle",
  slug: "exampleSlug",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    content: "exampleContent",
    createdAt: new Date(),
    draft: "true",
    featuredImage: "exampleFeaturedImage",
    id: "exampleId",
    metaDescription: "exampleMetaDescription",
    metaTitle: "exampleMetaTitle",
    slug: "exampleSlug",
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  content: "exampleContent",
  createdAt: new Date(),
  draft: "true",
  featuredImage: "exampleFeaturedImage",
  id: "exampleId",
  metaDescription: "exampleMetaDescription",
  metaTitle: "exampleMetaTitle",
  slug: "exampleSlug",
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
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

describe("Post", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PostService,
          useValue: service,
        },
      ],
      controllers: [PostController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /posts", async () => {
    await request(app.getHttpServer())
      .post("/posts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /posts", async () => {
    await request(app.getHttpServer())
      .get("/posts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /posts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /posts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
