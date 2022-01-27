import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {
  LoginDTO,
  ResetPasswordEmailDTO,
  ResetPasswordDTO,
  RegisterDTO,
} from './auth.dto';
import {
  Controller,
  Post,
  Get,
  UsePipes,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from 'src/shared/decorators/user.decorator';
import { ValidationPipe } from 'src/shared/pipes/validator.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return this.authService.login(loginDto);
  }

  @UsePipes(new ValidationPipe())
  @Post('register')
  register(@Body() registerDto: RegisterDTO) {
    return this.authService.register(registerDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('principal')
  getCurrentUser(@CurrentUser() user: any) {
    return user;
  }

  @UsePipes(new ValidationPipe())
  @Post('reset-password')
  sendResetPasswordEmail(@Body() resetPasswordEmailDto: ResetPasswordEmailDTO) {
    return this.authService.resetPassword(resetPasswordEmailDto);
  }

  @UsePipes(new ValidationPipe())
  @Post('change-password')
  changePassword(@Body() resetPasswordDto: ResetPasswordDTO) {
    return this.authService.changePassword(
      resetPasswordDto._id,
      resetPasswordDto.password,
    );
  }
}
