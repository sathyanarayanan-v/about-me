import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor() {}

  @Get('')
  getStatus(@Res() res: Response) {
    res
      .status(200)
      .redirect(
        HttpStatus.MOVED_PERMANENTLY,
        'https://lotusdecoreandrental.com',
      );
  }

  @Get('health')
  getHealth() {
    return true;
  }
}
