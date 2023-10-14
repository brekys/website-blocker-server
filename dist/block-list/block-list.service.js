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
exports.BlockListService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let BlockListService = class BlockListService {
    constructor(db) {
        this.db = db;
    }
    create(userId) {
        return this.db.blockList.create({ data: { ownerId: userId } });
    }
    getByUser(userId, query) {
        return this.db.blockList.findUniqueOrThrow({
            where: { ownerId: userId },
            include: {
                items: {
                    where: { data: { contains: query.q, mode: 'insensitive' } },
                    orderBy: { createdAt: 'desc' },
                },
            },
        });
    }
    async addItem(userId, data) {
        const blockList = await this.db.blockList.findUniqueOrThrow({ where: { ownerId: userId } });
        return this.db.blockItem.create({
            data: { blockListId: blockList.id, ...data }
        });
    }
    async removeItem(userId, itemId) {
        const blockList = await this.db.blockList.findUniqueOrThrow({ where: { ownerId: userId } });
        return this.db.blockItem.delete({ where: { blockListId: blockList.id, id: itemId } });
    }
};
exports.BlockListService = BlockListService;
exports.BlockListService = BlockListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], BlockListService);
//# sourceMappingURL=block-list.service.js.map