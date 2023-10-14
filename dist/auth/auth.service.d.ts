import { UsersService } from "../users/users.service";
import { PasswordService } from "./password.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private usersService;
    private passwordService;
    private jwtService;
    constructor(usersService: UsersService, passwordService: PasswordService, jwtService: JwtService);
    signUp(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    signIn(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
