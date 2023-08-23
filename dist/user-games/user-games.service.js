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
exports.UserGamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_game_entity_1 = require("./entities/user-game.entity");
let UserGamesService = class UserGamesService {
    constructor(UserGamesRepository) {
        this.UserGamesRepository = UserGamesRepository;
    }
    findAll() {
        return this.UserGamesRepository.find();
    }
    async getUserGamesWithFilter(filterDto) {
        const { user_id } = filterDto;
        const query = this.UserGamesRepository.createQueryBuilder('userGame');
        if (user_id) {
            query.andWhere('userGame.user_id = :user_id', { user_id });
        }
        const userGames = await query.getMany();
        return userGames;
    }
    async create(createUserGameDto) {
        const userGames = this.UserGamesRepository.create(createUserGameDto);
        const userGamesExists = await this.UserGamesRepository.findOneBy(createUserGameDto);
        if (userGamesExists) {
            throw new common_1.BadRequestException('this game/user is already linked');
        }
        await this.UserGamesRepository.save(userGames);
        return userGames;
    }
    findOne(id) {
        return this.UserGamesRepository.findOneBy({ id: id });
    }
    async remove(id) {
        const userGames = await this.UserGamesRepository.findOneBy({ id: id });
        if (!userGames) {
            throw new common_1.NotFoundException(`game ID ${id} not found`);
        }
        return this.UserGamesRepository.remove(userGames);
    }
};
UserGamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_game_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserGamesService);
exports.UserGamesService = UserGamesService;
//# sourceMappingURL=user-games.service.js.map