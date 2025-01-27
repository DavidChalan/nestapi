import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [ProductsController],
  providers: [],
})
export class AppModule {}
