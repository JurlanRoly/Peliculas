import { Injectable } from '@nestjs/common';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Priority } from './entities/priority.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PriorityService {
  constructor(
    @InjectRepository(Priority)
    private repository: Repository<Priority>,
  ) {}

  create(createPriorityDto: CreatePriorityDto) {
    const record = this.repository.create(createPriorityDto);
    return this.repository.save(record);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updatePriorityDto: UpdatePriorityDto) {
    const record = await this.repository.preload(updatePriorityDto);
    return await this.repository.save(record);
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
