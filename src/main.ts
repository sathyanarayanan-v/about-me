import { Logger } from '@nestjs/common';
import { config } from 'dotenv';
import axios from 'axios';
function setupServer() {
  const port = parseInt(process.env.PORT, 10) || 6338;
  const host = process.env.HOST || '0.0.0.0';
  const globalPrefix = process.env.GLOBAL_PREFIX || 'api/v1';
  return { port, host, globalPrefix };
}

async function bootstrap() {
  config();
  const { NestFactory } = await import('@nestjs/core');
  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create(AppModule);
  const { port, host, globalPrefix } = setupServer();

  app.enableCors();
  app.setGlobalPrefix(globalPrefix);

  setInterval(() => {
    axios.get(process.env.API_URL);
  }, parseInt(process.env.HEALTH_CHECK_INTERVAL) || 2700000);

  await app.listen(port, host, () => {
    Logger.log(
      `Nest App listening at http://${host}:${port}/${globalPrefix}`,
      'NestApplication',
    );
  });
}

bootstrap();
