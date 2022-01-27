import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsUUID, IsEnum, IsString } from 'class-validator';
import { Roles } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateRoleDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsEnum(Roles)
  @IsNotEmpty()
  role: Roles;
}
