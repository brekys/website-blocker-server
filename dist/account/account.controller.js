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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const account_service_1 = require("./account.service");
const auth_guard_1 = require("../auth/auth.guard");
const session_info_decorator_1 = require("../auth/session-info.decorator");
const dto_2 = require("../auth/dto");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    getAccount(session) {
        return this.accountService.getAccount(session.id);
    }
    patchAccount(body, session) {
        return this.accountService.patchAccount(session.id, body);
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.AccountDto,
    }),
    __param(0, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.GetSessionInfoDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.AccountDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.PatchAccountDto, dto_2.GetSessionInfoDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "patchAccount", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)('account'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
//# sourceMappingURL=account.controller.js.map