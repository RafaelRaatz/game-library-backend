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
exports.UserGamesController = void 0;
const common_1 = require("@nestjs/common");
const user_games_service_1 = require("./user-games.service");
const create_user_game_dto_1 = require("./dto/create-user-game.dto");
const get_user_games_filter_dto_1 = require("./dto/get-user-games-filter.dto");
let UserGamesController = class UserGamesController {
    constructor(userGamesService) {
        this.userGamesService = userGamesService;
    }
    create(createUserGameDto) {
        return this.userGamesService.create(createUserGameDto);
    }
    GetUserGames(filterDto) {
        return this.userGamesService.getUserGamesWithFilter(filterDto);
    }
    findOne(id) {
        return this.userGamesService.findOne(id);
    }
    remove(id) {
        return this.userGamesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_game_dto_1.CreateUserGameDto]),
    __metadata("design:returntype", void 0)
], UserGamesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_games_filter_dto_1.GetUserGamesFilterDto]),
    __metadata("design:returntype", Promise)
], UserGamesController.prototype, "GetUserGames", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserGamesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserGamesController.prototype, "remove", null);
UserGamesController = __decorate([
    (0, common_1.Controller)('user-games'),
    __metadata("design:paramtypes", [user_games_service_1.UserGamesService])
], UserGamesController);
exports.UserGamesController = UserGamesController;
//# sourceMappingURL=user-games.controller.js.map