import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'Description không được để trống' })
  description: string;

  @IsNotEmpty({ message: 'isActive không được để trống' })
  @IsBoolean({ message: 'isActive có giá trị boolean' })
  isActive: boolean;

  @IsNotEmpty({ message: 'Permission không được để trống' })
  @IsMongoId({ each: true, message: 'Mỗi permission là mongo object id' })
  @IsArray({ message: 'Permission có định dạng là array' })
  permissions: mongoose.Schema.Types.ObjectId[];
}
