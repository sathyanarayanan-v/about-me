import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CategoryDocument = Category & mongoose.Document;

@Schema({ autoCreate: true, timestamps: true })
export class Category {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true, unique: true })
  slug: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
