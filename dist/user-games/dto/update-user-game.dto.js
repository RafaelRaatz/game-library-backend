"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserGameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_game_dto_1 = require("./create-user-game.dto");
class UpdateUserGameDto extends (0, mapped_types_1.PartialType)(create_user_game_dto_1.CreateUserGameDto) {
}
exports.UpdateUserGameDto = UpdateUserGameDto;
//# sourceMappingURL=update-user-game.dto.js.map