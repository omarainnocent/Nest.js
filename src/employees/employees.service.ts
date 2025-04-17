import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

 async create(createEmployeeDto: Prisma.$EmployeePayload) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
    })
  }

async  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return `This action returns all employees`;
  }

async  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

async  update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return `This action updates a #${id} employee`;
  }

async  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
