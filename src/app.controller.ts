import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  HttpStatus,
  Render,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor() {}

  // @UseGuards(AuthGuard('jwt'))
  @Get('')
  @Render('index')
  getStatus() {
    return { message: 'hello' };
  }

  @Get('products')
  @Render('products/index')
  getHealth() {
    return { message: 'hello' };
  }

  @Get('services')
  @Render('services/index')
  getServices() {
    return { message: 'hello' };
  }

  @Get('home')
  @Render('home')
  home() {
    return { message: 'hello' };
  }
}
