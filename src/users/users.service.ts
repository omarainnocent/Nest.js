import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": 'John Doe',
            "email": "johndoe@gmail.com",
            "role": 'INTER',
        },
        {
            "id": 2,
            "name": 'Jane Smith',
            "email": 'janesmith@gmail.com',
            "role": 'INTERN',
        },
        {
            "id": 3,
            name: 'Clementine Baoch',
            "email": "clementinebaoch@gmail.com",
            role: 'ENGINEER',
        },
        {
            "id": 4,
            "name": 'Patricia Lebsack',
            "email": 'patriciaa@gmail.com',
            "role": 'ENGINEER',
        },
        {
            "id": 5,
            "name": 'Chelsey Dietrich',
            "email": 'chelseydaetrich@gmail.com',
            "role": 'ADMIN',
        },
    ]

    
}
