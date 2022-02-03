import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  constructor() {}

  async transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new HttpException(
        'Validation Failed. No Body provided.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (value.data) {
      try {
        value = JSON.parse(value.data);
      } catch (error) {
        console.log('Error parsing data while validation' + value);
      }
    }
    if (value instanceof Object && this.isEmptyObject(value)) {
      throw new HttpException(
        'Validation Failed. No Body provided.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      console.log(JSON.stringify(errors, null, 4) + '\n');
      throw new HttpException(`Invalid Request`, HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
  private isEmptyObject = (object: any) => Object.keys(object).length === 0;
}
