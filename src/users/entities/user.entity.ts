import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from 'src/auth/constants';

export type UserDocument = User & Document;

export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
@Schema({ autoCreate: true, timestamps: true, toObject: {} })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  preferredName: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true })
  phone: string;

  @Prop({
    type: mongoose.Schema.Types.String,
    unique: true,
    required: true,
  })
  email: string;

  @Prop({ type: mongoose.Schema.Types.String })
  password: string;

  @Prop({ type: mongoose.Schema.Types.String, enum: Roles, default: 'USER' })
  role: Roles;

  //   @OneToMany((type) => Order, (order) => order.id)
  //   orders: Order[];

  @Prop({ type: mongoose.Schema.Types.String })
  salt: string;

  createdAt?: Date;
  _id?: any;

  private get token(): string {
    const { _id, email, role } = this;

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

  toResponseObject(showToken = true) {
    const { _id, createdAt, email, token, firstName, lastName, phone, role } =
      this;
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
      responseObject['token'] = token;
    }
    return responseObject;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre<User>('save', function (next: Function) {
  const user = this;
  if (user.password) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.salt = salt;
        user.password = hash;
        next();
      });
    });
  }
});
