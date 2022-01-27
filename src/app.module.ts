import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/filters/http/http.filter';
import { HttpInterceptor } from './shared/interceptors/http/http.interceptor';
import { LoggerInterceptor } from './shared/interceptors/logger/logger.interceptor';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27019/lotus_traders'),
    UsersModule,
    AuthModule,
    SharedModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
  ],
})
export class AppModule {}
