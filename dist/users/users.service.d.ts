import { DbService } from "src/db/db.service";
import { AccountService } from "../account/account.service";
import { BlockListService } from "../block-list/block-list.service";
export declare class UsersService {
    private db;
    private accountService;
    private blockListService;
    constructor(db: DbService, accountService: AccountService, blockListService: BlockListService);
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        hash: string;
        salt: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(email: string, hash: string, salt: string): Promise<{
        id: number;
        email: string;
        hash: string;
        salt: string;
    }>;
}
