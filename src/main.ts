import { Logger } from '@nestjs/common';
import { config } from 'dotenv';
import axios from 'axios';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
function setupServer() {
  const port = parseInt(process.env.PORT, 10) || 6338;
  const host = process.env.HOST || '0.0.0.0';

  if (process.env.NODE_ENV == 'production') {
    Logger.log('Nest App is running in production mode', 'NestApplication');
    setInterval(() => {
      axios.get(process.env.API_URL);
    }, parseInt(process.env.HEALTH_CHECK_INTERVAL) || 2700000);
  }
  return { port, host };
}

async function bootstrap() {
  config();
  const { NestFactory } = await import('@nestjs/core');
  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const { port, host } = setupServer();

  app.enableCors();

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));
  app.set('view options', {
    layout: join('..', 'layouts', 'index'),
  });

  await app.listen(port, host, () => {
    Logger.log(
      `Nest App listening at http://${host}:${port}`,
      'NestApplication',
    );
  });
}

bootstrap();
