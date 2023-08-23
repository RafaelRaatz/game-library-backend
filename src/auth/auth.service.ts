import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    if (!user) {
      throw new UnauthorizedException('Email ou Senha Inválidos');
    }
    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou Senha Inválidos');
    }
    if (isPasswordValid) {
      return await this.gerarToken(user);
    }
  }

  async gerarToken(payload: User) {
    return {
      access_token: this.jwtService.sign(
        { email: payload.email },
        {
          secret: 'topSecret512',
          expiresIn: '50s',
        },
      ),
    };
  }
}
