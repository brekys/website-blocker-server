"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder().setTitle('Block list').build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(cookieParser());
    app.enableCors({
        origin: [
            'http://localhost:3001',
            'chrome-extension://lojdliadbdcgcpihaodpfoehgdahcibp',
        ],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map