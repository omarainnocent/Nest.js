import { Controller, Get } from '@nestjs/common';

@Controller('users')  
export class UsersController {
    /*
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() // GET /users
findAll() {
    return []
}
}

