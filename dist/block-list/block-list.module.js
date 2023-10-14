"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockListModule = void 0;
const common_1 = require("@nestjs/common");
const block_list_service_1 = require("./block-list.service");
const block_list_controller_1 = require("./block-list.controller");
const db_module_1 = require("../db/db.module");
let BlockListModule = class BlockListModule {
};
exports.BlockListModule = BlockListModule;
exports.BlockListModule = BlockListModule = __decorate([
    (0, common_1.Module)({
        imports: [db_module_1.DbModule],
        providers: [block_list_service_1.BlockListService],
        controllers: [block_list_controller_1.BlockListController],
        exports: [block_list_service_1.BlockListService],
    })
], BlockListModule);
//# sourceMappingURL=block-list.module.js.map