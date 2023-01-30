import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/Course.entity';

@Injectable()
export class CoursesService {
  private courses: Array<Course> = [
    {
      id: 1,
      name: 'NestJS',
      description: 'Fundamentos do NestJS',
      tags: ['NodeJS', 'NestJS', 'JavaScript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findById(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(`Course ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return course;
  }

  create(courseDTO: any) {
    this.courses.push(courseDTO);
  }

  update(id: string, courseDTO: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[indexCourse] = courseDTO;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse > 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
