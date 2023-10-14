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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBlockItemDto = exports.BlockListQueryDto = exports.BlockListDto = exports.BlockItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class BlockItemDto {
}
exports.BlockItemDto = BlockItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BlockItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BlockItemDto.prototype, "blockListId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [client_1.$Enums.BlockItemType.KeyWord, client_1.$Enums.BlockItemType.Website],
    }),
    __metadata("design:type", String)
], BlockItemDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlockItemDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], BlockItemDto.prototype, "createdAt", void 0);
class BlockListDto {
}
exports.BlockListDto = BlockListDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BlockListDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BlockListDto.prototype, "ownerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [BlockItemDto]
    }),
    __metadata("design:type", Array)
], BlockListDto.prototype, "items", void 0);
class BlockListQueryDto {
}
exports.BlockListQueryDto = BlockListQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BlockListQueryDto.prototype, "q", void 0);
class AddBlockItemDto {
}
exports.AddBlockItemDto = AddBlockItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [client_1.$Enums.BlockItemType.KeyWord, client_1.$Enums.BlockItemType.Website],
    }),
    (0, class_validator_1.IsIn)([client_1.$Enums.BlockItemType.KeyWord, client_1.$Enums.BlockItemType.Website]),
    __metadata("design:type", String)
], AddBlockItemDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AddBlockItemDto.prototype, "data", void 0);
//# sourceMappingURL=dto.js.map