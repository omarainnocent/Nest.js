import { Body, Controller, Get, Post, Param, Patch, Delete, Query } from '@nestjs/common';

@Controller('users')  
export class UsersController {

@Get() //GET / users or /users?role=value
findAll(@Query('role') role?: 'INTER' | 'ENGINEER' | 'ADMIN')
{
    return []
}
@Get(':id') // Get / user/: id
findOne(@Param('id') id: string) {
    return { id }

}
@Post() //POST /users
create(@Body() user: {}) {
    return user

}

@Patch(':id') // Patch /users/:id
update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate }

}

@Delete(':id') // DELETE /users/:id
delete(@Param('id') id: string) {
    return { id }

}

}