import { loggerInstance } from 'src/logger/index';
import { UsersService } from './../users/users.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.pk,
    });
  }

  async validate(payload: any) {
    const { _id } = payload;
    try {
      const consumer = await this.userService.findOne(_id);
      if (consumer) {
        return consumer.toResponseObject(false);
      }
      return null;
    } catch (error) {
      loggerInstance.log(
        'Unable to fetch consumer in auth guard',
        'error',
        'AuthGuard',
      );
      return null;
    }
  }
}
