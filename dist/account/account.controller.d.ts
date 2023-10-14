import { AccountDto, PatchAccountDto } from "./dto";
import { AccountService } from "./account.service";
import { GetSessionInfoDto } from "../auth/dto";
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    getAccount(session: GetSessionInfoDto): Promise<AccountDto>;
    patchAccount(body: PatchAccountDto, session: GetSessionInfoDto): Promise<AccountDto>;
}
