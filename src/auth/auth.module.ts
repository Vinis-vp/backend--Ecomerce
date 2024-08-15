import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { ClientModule } from 'src/client/client.module';
import { RolesGuard } from './role.guard';

@Module({
  imports: [UserModule, PassportModule, ClientModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy, RolesGuard],
  exports: [JwtModule, AuthService, RolesGuard],
})
export class AuthModule {}
