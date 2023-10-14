import { AddBlockItemDto, BlockItemDto, BlockListDto, BlockListQueryDto } from "./dto";
import { GetSessionInfoDto } from "../auth/dto";
import { BlockListService } from "./block-list.service";
export declare class BlockListController {
    private blockListService;
    constructor(blockListService: BlockListService);
    getList(query: BlockListQueryDto, session: GetSessionInfoDto): Promise<BlockListDto>;
    addBlockListItem(body: AddBlockItemDto, session: GetSessionInfoDto): Promise<BlockItemDto>;
    removeBlockItem(id: number, session: GetSessionInfoDto): Promise<BlockItemDto>;
}
