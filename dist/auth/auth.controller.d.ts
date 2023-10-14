import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from "./dto";
import { AuthService } from "./auth.service";
import { Response } from 'express';
import { CookieService } from "./cookie.service";
export declare class AuthController {
    private authService;
    private cookieService;
    constructor(authService: AuthService, cookieService: CookieService);
    signUp(body: SignUpBodyDto, res: Response): Promise<void>;
    signIn(body: SignInBodyDto, res: Response): Promise<void>;
    signOut(res: Response): void;
    getSessionInfo(session: GetSessionInfoDto): GetSessionInfoDto;
}
