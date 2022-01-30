import { Controller, Get, HttpStatus, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor() {}

  @Get('')
  @Render('home')
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
