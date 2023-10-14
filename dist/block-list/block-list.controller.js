"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const session_info_decorator_1 = require("../auth/session-info.decorator");
const dto_2 = require("../auth/dto");
const block_list_service_1 = require("./block-list.service");
const auth_guard_1 = require("../auth/auth.guard");
let BlockListController = class BlockListController {
    constructor(blockListService) {
        this.blockListService = blockListService;
    }
    getList(query, session) {
        return this.blockListService.getByUser(session.id, query);
    }
    addBlockListItem(body, session) {
        return this.blockListService.addItem(session.id, body);
    }
    async removeBlockItem(id, session) {
        return await this.blockListService.removeItem(session.id, id);
    }
};
exports.BlockListController = BlockListController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.BlockListDto,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BlockListQueryDto, dto_2.GetSessionInfoDto]),
    __metadata("design:returntype", Promise)
], BlockListController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)('item'),
    (0, swagger_1.ApiCreatedResponse)({
        type: dto_1.BlockItemDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AddBlockItemDto, dto_2.GetSessionInfoDto]),
    __metadata("design:returntype", Promise)
], BlockListController.prototype, "addBlockListItem", null);
__decorate([
    (0, common_1.Delete)('item/:id'),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.BlockItemDto
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_2.GetSessionInfoDto]),
    __metadata("design:returntype", Promise)
], BlockListController.prototype, "removeBlockItem", null);
exports.BlockListController = BlockListController = __decorate([
    (0, common_1.Controller)('block-list'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [block_list_service_1.BlockListService])
], BlockListController);
//# sourceMappingURL=block-list.controller.js.map