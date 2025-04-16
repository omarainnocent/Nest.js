import { Body, Controller, Get, Post, Param, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService  } from './users.service';
import { UpdatedUserDto } from './dto/update-user.dto';

@Controller('users')  
export class UsersController {

    constructor(private readonly userService: UsersService) {}

@Get() //GET / users or /users?role=value
findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN')
{
    return this.userService.findAll(role)
}
@Get(':id') // Get / user/: id
findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne( id)

}
@Post() //POST /users
create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)

}
@Patch(':id') // Patch /users/:id
update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdatedUserDto) {
    return this.userService.update(id, updateUserDto)

}
@Delete(':id') // DELETE /users/:id
delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id)

}

}