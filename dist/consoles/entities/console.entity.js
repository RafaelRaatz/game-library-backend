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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
const game_entity_1 = require("../../games/entities/game.entity");
const typeorm_1 = require("typeorm");
let Console = class Console {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Console.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.Game),
    (0, typeorm_1.JoinColumn)({ name: 'game_console' }),
    __metadata("design:type", game_entity_1.Game)
], Console.prototype, "game", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Console.prototype, "game_console", void 0);
Console = __decorate([
    (0, typeorm_1.Entity)('consoles')
], Console);
exports.Console = Console;
//# sourceMappingURL=console.entity.js.map