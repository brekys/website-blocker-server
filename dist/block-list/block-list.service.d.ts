import { DbService } from "../db/db.service";
import { AddBlockItemDto, BlockListQueryDto } from "./dto";
export declare class BlockListService {
    private db;
    constructor(db: DbService);
    create(userId: number): import(".prisma/client").Prisma.Prisma__BlockListClient<{
        id: number;
        ownerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getByUser(userId: number, query: BlockListQueryDto): import(".prisma/client").Prisma.Prisma__BlockListClient<{
        items: {
            id: number;
            blockListId: number;
            type: import(".prisma/client").$Enums.BlockItemType;
            data: string;
            createdAt: Date;
        }[];
    } & {
        id: number;
        ownerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    addItem(userId: number, data: AddBlockItemDto): Promise<{
        id: number;
        blockListId: number;
        type: import(".prisma/client").$Enums.BlockItemType;
        data: string;
        createdAt: Date;
    }>;
    removeItem(userId: number, itemId: number): Promise<{
        id: number;
        blockListId: number;
        type: import(".prisma/client").$Enums.BlockItemType;
        data: string;
        createdAt: Date;
    }>;
}
