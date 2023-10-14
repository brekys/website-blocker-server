"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionInfo = void 0;
const common_1 = require("@nestjs/common");
exports.SessionInfo = (0, common_1.createParamDecorator)((_, ctx) => ctx.switchToHttp().getRequest().session);
//# sourceMappingURL=session-info.decorator.js.map