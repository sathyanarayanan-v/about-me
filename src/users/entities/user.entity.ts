import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
@Schema({ autoCreate: true, timestamps: true })
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
  updatedAt?: Date;
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
