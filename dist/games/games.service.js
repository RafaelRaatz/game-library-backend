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
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const game_entity_1 = require("./entities/game.entity");
let GamesService = class GamesService {
    constructor(GameRepository) {
        this.GameRepository = GameRepository;
    }
    async create(createGameDto) {
        const game = this.GameRepository.create(createGameDto);
        const gameExists = await this.GameRepository.findOneBy(createGameDto);
        if (gameExists) {
            throw new common_1.NotFoundException('there is already a game with this name');
        }
        await this.GameRepository.save(game);
        return game;
    }
    findAll() {
        return this.GameRepository.find();
    }
    findOne(id) {
        const gameExists = this.GameRepository.findOneBy({ id: id });
        if (!gameExists) {
            throw new common_1.NotFoundException(`Game ID ${id} not found`);
        }
        return gameExists;
    }
    async update(id, updateGameDto) {
        const game = await this.GameRepository.preload(Object.assign({ id }, updateGameDto));
        if (!game) {
            throw new common_1.NotFoundException(`Game ID ${id} not found`);
        }
        return this.GameRepository.save(game);
    }
    async remove(id) {
        const game = await this.GameRepository.findOneBy({ id: id });
        if (!game) {
            throw new common_1.NotFoundException(`game ID ${id} not found`);
        }
        return this.GameRepository.remove(game);
    }
};
GamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(game_entity_1.Game)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map