import { PatchAccountDto } from "./dto";
import { DbService } from "../db/db.service";
export declare class AccountService {
    private db;
    constructor(db: DbService);
    create(userId: number): Promise<{
        id: number;
        ownerId: number;
        isBlockingEnabled: boolean;
    }>;
    getAccount(userId: number): Promise<{
        id: number;
        ownerId: number;
        isBlockingEnabled: boolean;
    }>;
    patchAccount(userId: number, patch: PatchAccountDto): Promise<{
        id: number;
        ownerId: number;
        isBlockingEnabled: boolean;
    }>;
}
