import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
// import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PeliculaService {
  constructor(
    @InjectRepository(Pelicula)
    private repository: Repository<Pelicula>,
  ) {}

  create(createPeliculaDto: CreatePeliculaDto) {
    const record = this.repository.create(createPeliculaDto);
    return this.repository.save(record);
  }

  findAll() {
    return this.repository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} pelicula`;
  // }

  // update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
  //   return `This action updates a #${id} pelicula`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pelicula`;
  // }
}
