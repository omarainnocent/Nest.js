import { Body, Controller, Get, Post, Param, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService  } from './users.service';

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
create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.userService.create(user)

}
@Patch(':id') // Patch /users/:id
update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
    return this.userService.update(id, userUpdate)

}
@Delete(':id') // DELETE /users/:id
delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id)

}

}