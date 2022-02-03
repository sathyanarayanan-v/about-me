import { UserRepository } from './users.repository';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateRoleDto, UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/auth/auth.dto';
import { UserDocument } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/auth/constants';
@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository.create(createUserDto);
      return this.toResponseObject(user, true);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async comparePassword(
    attempt: string,
    password: string,
  ): Promise<boolean> {
    return await bcrypt.compare(attempt, password);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findById(id);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneByEmail(email);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  updateRole(id: string, updateRoleDto: UpdateRoleDto) {
    return this.userRepository.updateRole(id, updateRoleDto);
  }

  generatePassWord() {
    let pass = '';
    let str =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    return pass;
  }

  async updatePassword(id: string, password: string) {
    const hashedPwd = await bcrypt.hash(password, 10);
    try {
      await this.userRepository.updatePassword(id, hashedPwd);
      const user = await this.userRepository.findById(id);
      return this.toResponseObject(user, false);
    } catch (error) {
      console.log(
        'Something went wrong while updating password for id ' +
          id +
          'and error is ' +
          ' ' +
          error,
      );
      throw new InternalServerErrorException();
    }
  }

  private gettoken(user: UserDocument): string {
    const { _id, email, role } = user;

    return jwt.sign(
      {
        _id,
        email,
        role,
      },
      jwtConstants.pk,
      {
        expiresIn: '30d',
        algorithm: 'HS256',
        issuer: 'BezzieTech Authentication API',
        audience: 'Lotus Event Management',
        subject: `${email} - ${_id}`,
      },
    );
  }

  toResponseObject(user: UserDocument, showToken = true) {
    const { _id, createdAt, email, firstName, lastName, phone, role } = user;
    const responseObject = {
      _id,
      createdAt,
      email,
      firstName,
      lastName,
      phone,
      role,
    };
    if (showToken) {
      responseObject['token'] = this.gettoken(user);
    }
    return responseObject;
  }

  async login(loginDto: LoginDTO) {
    try {
      const { username, password } = loginDto;
      const user = await this.userRepository.findOneByEmail(username);

      if (!user) {
        throw new NotFoundException('No account exists. Please sign up');
      }
      if (!(await this.comparePassword(password, user.password))) {
        throw new UnauthorizedException('Invalid username/password');
      }
      return this.toResponseObject(user, true);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  count() {
    return this.userRepository.count();
  }
}
