import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

type FindByIdParams = {
  id: string;
};

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    // findAll(@Res() response: any) {
    // return response.status(200).json({ message: 'lista de cursos' });
    return this.coursesService.findAll();
    // return 'List of Courses';
  }

  @Get(':id')
  findById(@Param() params: FindByIdParams) {
    return this.coursesService.findById(params.id);
    // return `Curso ${params.id}`;
  }
  // findById(@Param('id') id: string) {
  //   return `Curso ${id}`;
  // }

  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
