import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PriorityModule } from './priority/priority.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Priority } from './priority/entities/priority.entity';
import { PeliculaModule } from './pelicula/pelicula.module';
import { Pelicula } from './pelicula/entities/pelicula.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'spirit',
      database: 'instacor',
      entities: [Priority, Pelicula],
      synchronize: false,
    }),
    PriorityModule,
    PeliculaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
