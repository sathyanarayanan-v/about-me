import { RoleGuard } from './../shared/guards/role.guard';
import { AuthGuard } from '@nestjs/passport';
import { ValidationPipe } from './../shared/pipes/validator.pipe';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  UseGuards,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Roles('ADMIN')
  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Roles('ADMIN')
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  // @UsePipes(new ValidationPipe())
  // @UseGuards(AuthGuard('jwt'), RoleGuard)
  // @Roles('ADMIN')
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoriesService.remove(+id);
  // }
}
