"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleRepository = void 0;
const typeorm_1 = require("typeorm");
const console_entity_1 = require("./entities/console.entity");
let ConsoleRepository = class ConsoleRepository extends typeorm_1.Repository {
    async createOrder({ game }) {
        const order = this.create(game);
        await this.save(order);
        return order;
    }
};
ConsoleRepository = __decorate([
    (0, typeorm_1.EntityRepository)(console_entity_1.Console)
], ConsoleRepository);
exports.ConsoleRepository = ConsoleRepository;
//# sourceMappingURL=consoles.repository.js.map