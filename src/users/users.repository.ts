import { UpdateRoleDto, UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  find() {
    return this.userModel.find();
  }

  findById(id: string) {
    return this.userModel.findById(id);
  }

  updatePassword(id: string, password: string) {
    return this.userModel.findOneAndUpdate(
      { _id: id },
      { password },
      { new: true },
    );
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, {
      new: true,
    });
  }

  updateRole(id: string, updateRoleDto: UpdateRoleDto) {
    return this.userModel.findOneAndUpdate(
      { _id: id },
      { role: updateRoleDto.role },
      { new: true },
    );
  }
  count() {
    return this.userModel.count();
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
}
