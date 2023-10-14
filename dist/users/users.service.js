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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
const account_service_1 = require("../account/account.service");
const block_list_service_1 = require("../block-list/block-list.service");
let UsersService = class UsersService {
    constructor(db, accountService, blockListService) {
        this.db = db;
        this.accountService = accountService;
        this.blockListService = blockListService;
    }
    findByEmail(email) {
        return this.db.user.findFirst({ where: { email } });
    }
    async create(email, hash, salt) {
        const user = await this.db.user.create({ data: { email, hash, salt } });
        await this.accountService.create(user.id);
        await this.blockListService.create(user.id);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService, account_service_1.AccountService, block_list_service_1.BlockListService])
], UsersService);
//# sourceMappingURL=users.service.js.map