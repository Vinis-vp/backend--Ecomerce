import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ClientService } from 'src/client/client.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private clientService: ClientService
    ) {}
    
    async validateUser (email: string, password: string): Promise<any> { 
        const client = await this.clientService.findOne(email);
        if (client && bcrypt.compareSync(password, client.password)) {
          const { password,saltPassword, ...result } = {...client, role: 'client'};
          return result;
        }
        const user = await this.userService.findOne(email);
        if (user && bcrypt.compareSync(password, user.password)) {
            const { password,saltPassword, ...result} = {...user, role: 'user'};
            return result;
        }
        return false;
      }

      async login(user: any) {
        const payload = { email: user.email, sub: user.idUser, roles: user.role };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
