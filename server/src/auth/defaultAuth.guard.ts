import { ExecutionContext,Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtAuthGuard } from "./jwt/jwtAuth.guard";
import {IS_PUBLIC_KEY} from "../decorators/public.decorator"

@Injectable()
export class DefaultAuthGuard extends JwtAuthGuard {
    constructor(private readonly reflector: Reflector) {
        super();
    }

    //skip auth check if the endpoint is decorated with @Public 
    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.get<boolean>(
            IS_PUBLIC_KEY,
            context.getHandler()
        );

        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
}