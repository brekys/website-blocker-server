import { $Enums } from "@prisma/client";
export declare class BlockItemDto {
    id: number;
    blockListId: number;
    type: $Enums.BlockItemType;
    data: string;
    createdAt: Date;
}
export declare class BlockListDto {
    id: number;
    ownerId: number;
    items: BlockItemDto[];
}
export declare class BlockListQueryDto {
    q?: string;
}
export declare class AddBlockItemDto {
    type: $Enums.BlockItemType;
    data: string;
}
