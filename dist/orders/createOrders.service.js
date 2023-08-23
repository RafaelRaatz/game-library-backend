"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrdersService = void 0;
const common_1 = require("@nestjs/common");
const games_repository_1 = require("../games/games.repository");
const users_repository_1 = require("../users/users.repository");
const typeorm_1 = require("typeorm");
const orders_repository_1 = require("./orders.repository");
class CreateOrdersService {
    async execute({ user_id, games }) {
        const usersRepository = (0, typeorm_1.getCustomRepository)(users_repository_1.default);
        const gamesRepository = (0, typeorm_1.getCustomRepository)(games_repository_1.default);
        const ordersRepository = (0, typeorm_1.getCustomRepository)(orders_repository_1.default);
        const usersExists = await usersRepository.findById(user_id);
        if (!usersExists) {
            throw new common_1.NotFoundException(`Could not find user with the given id`);
        }
        const existsGames = await gamesRepository.findAllByIds(games);
        if (!existsGames.length) {
            throw new common_1.NotFoundException(`Could not find user with the given id`);
        }
        const existsGamesIds = existsGames.map((game) => game.id);
        const checkInexistentGames = games.filter((game) => !existsGamesIds.includes(game.id));
        if (checkInexistentGames.length) {
            throw new common_1.NotFoundException(`Could not find user with the given id`);
        }
        const serializedGames = games.map((game) => ({
            game_id: game.id,
        }));
        const order = await ordersRepository.createOrder({
            user: usersExists,
            games: serializedGames,
        });
        return order;
    }
}
exports.CreateOrdersService = CreateOrdersService;
//# sourceMappingURL=createOrders.service.js.map