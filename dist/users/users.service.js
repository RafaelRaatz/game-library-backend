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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async create(createUserDto) {
        const user = this.UserRepository.create(createUserDto);
        const userExists = await this.UserRepository.findOneBy(createUserDto);
        if (userExists) {
            throw new common_1.NotFoundException('there is already a user with this name');
        }
        await this.UserRepository.save(user);
        return user;
    }
    findAll() {
        return this.UserRepository.find();
    }
    findOneByEmail(username) {
        return this.UserRepository.findOneBy({ email: username });
    }
    findOne(id) {
        const user = this.UserRepository.findOneBy({ id: id });
        if (!user) {
            throw new common_1.NotFoundException(`User ID ${id} not found`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.UserRepository.preload(Object.assign({ id }, updateUserDto));
        if (!user) {
            throw new common_1.NotFoundException(`User ID ${id} not found`);
        }
        return this.UserRepository.save(user);
    }
    async remove(id) {
        const user = await this.UserRepository.findOneBy({ id: id });
        if (!user) {
            throw new common_1.NotFoundException(`user ID ${id} not found`);
        }
        return this.UserRepository.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map