import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { UserModule } from './user/user.module.js';
import { PrismaModule } from './database/prisma.module.js';

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
