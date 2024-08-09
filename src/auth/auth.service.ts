import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    
    async signIn(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if (user && bcrypt.compareSync(password, user.Password)) {
            const { Password,SaltPassword, ...result } = user;
            return result;
        }
        return null;
      } 

      async login(user: any) {
        const payload = { email: user.email, sub: user.idUser };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
