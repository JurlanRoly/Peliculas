import { PartialType } from '@nestjs/mapped-types';
import { CreatePriorityDto } from './create-priority.dto';
import { IsInt } from 'class-validator';

export class UpdatePriorityDto extends PartialType(CreatePriorityDto) {
  @IsInt()
  id: number;
}
