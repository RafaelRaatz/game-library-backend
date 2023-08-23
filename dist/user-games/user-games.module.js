"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGamesModule = void 0;
const common_1 = require("@nestjs/common");
const user_games_service_1 = require("./user-games.service");
const user_games_controller_1 = require("./user-games.controller");
const user_game_entity_1 = require("./entities/user-game.entity");
const typeorm_1 = require("@nestjs/typeorm");
let UserGamesModule = class UserGamesModule {
};
UserGamesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_game_entity_1.default])],
        controllers: [user_games_controller_1.UserGamesController],
        providers: [user_games_service_1.UserGamesService],
    })
], UserGamesModule);
exports.UserGamesModule = UserGamesModule;
//# sourceMappingURL=user-games.module.js.map