import { Transform, Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubscriberDto {
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'Email không được để trống' })
  @IsEmail({ message: 'Email không đúng định dạng' })
  email: string;

  @IsNotEmpty({ message: 'Skills không được để trống' })
  @IsArray({ message: 'Skills có định dạng là array' })
  @IsString({ each: true, message: 'Skill định dạng là string' })
  skills: string[];
}
