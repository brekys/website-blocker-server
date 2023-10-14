import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, Res, UseGuards} from '@nestjs/common';
import {ApiCreatedResponse, ApiOkResponse} from "@nestjs/swagger";
import {AddBlockItemDto, BlockItemDto, BlockListDto, BlockListQueryDto} from "./dto";
import {SessionInfo} from "../auth/session-info.decorator";
import {GetSessionInfoDto} from "../auth/dto";
import {BlockListService} from "./block-list.service";
import {AuthGuard} from "../auth/auth.guard";

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
    constructor(private blockListService: BlockListService) {
    }

    @Get()
    @ApiOkResponse({
        type: BlockListDto,
    })
    getList(@Query() query: BlockListQueryDto, @SessionInfo() session: GetSessionInfoDto): Promise<BlockListDto> {
        return this.blockListService.getByUser(session.id, query);
    }

    @Post('item')
    @ApiCreatedResponse({
        type: BlockItemDto
    })
    addBlockListItem(@Body() body: AddBlockItemDto, @SessionInfo() session: GetSessionInfoDto): Promise<BlockItemDto> {
        return this.blockListService.addItem(session.id, body);
    }

    @Delete('item/:id')
    @ApiOkResponse({
        type: BlockItemDto
    })
    async removeBlockItem(@Param('id', ParseIntPipe) id: number, @SessionInfo() session: GetSessionInfoDto): Promise<BlockItemDto> {
        return await this.blockListService.removeItem(session.id, id);
    }
}
