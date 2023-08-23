"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlatformDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_platform_dto_1 = require("./create-platform.dto");
class UpdatePlatformDto extends (0, mapped_types_1.PartialType)(create_platform_dto_1.CreatePlatformDto) {
}
exports.UpdatePlatformDto = UpdatePlatformDto;
//# sourceMappingURL=update-platform.dto.js.map