import { UsersService } from './../users/users.service';
import { SharedService } from './../shared/shared.service';
import { LoginDTO, RegisterDTO, ResetPasswordEmailDTO } from './auth.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private sharedService: SharedService,
  ) {}

  login(loginDTO: LoginDTO) {
    return this.userService.login(loginDTO);
  }

  register(registerDto: RegisterDTO) {
    return this.userService.create(registerDto);
  }

  async resetPassword(resetPasswordDto: ResetPasswordEmailDTO) {
    const user = await this.userService.findOneByEmail(resetPasswordDto.email);
    if (!user) {
      throw new HttpException('Invalid email address', HttpStatus.FORBIDDEN);
    }

    const password = this.userService.generatePassWord();

    try {
      await this.userService.updatePassword(user._id, password);
      await this.sendForgotPasswordMail(user, password);
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private sendForgotPasswordMail(user: User, password: string) {
    return this.sharedService.sendMail(
      user.email,
      'Request for password Reset - ' + user.firstName + ' ' + user.lastName,
      'Lotus Event Management',
      'Please use this password to login and change the password after login! ' +
        password,
    );
  }

  changePassword(id: string, password: string) {
    return this.userService.updatePassword(id, password);
  }
}
