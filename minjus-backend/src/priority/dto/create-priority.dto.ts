import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreatePriorityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsBoolean()
  active: boolean;
}
