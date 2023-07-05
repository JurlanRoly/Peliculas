import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreatePeliculaDto {
  @IsString()
  idp: string;

  @IsString()
  title: string;

  @IsString()
  year: string;

  @IsString()
  type: string;

  @IsString()
  poster: string;
}
