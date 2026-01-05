import { config } from 'dotenv';
import { join } from 'path';
config({ path: join(process.cwd(), '.env') }); // carregando o .env da raiz

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
