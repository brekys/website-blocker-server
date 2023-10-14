import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {Request} from 'express'
import {CookieService} from "./cookie.service";
import {JwtService} from "@nestjs/jwt";
import * as process from "process";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext) {
        const req: Request = context.switchToHttp().getRequest();

        const token = req.cookies[CookieService.tokenKey];

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const sessionInfo = this.jwtService.verifyAsync(token, {secret: process.env.JWT_SECRET});

            req['session'] = sessionInfo;
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }
}
