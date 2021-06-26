import { Module } from '@nestjs/common';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { UserCrudResolver } from '../prisma/generated/type-graphql';

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      playground: process.env.NODE_ENV !== 'production',
      introspection: true,
      path: '/',
      emitSchemaFile: true,
      validate: false,
      context: () => ({ prisma: new PrismaClient() }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserCrudResolver],
})
export class AppModule {}
