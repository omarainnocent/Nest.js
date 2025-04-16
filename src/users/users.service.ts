import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';

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

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        return user
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

   update(id: number, updateUser: UpdatedUserDto) {
    this.users = this.users.map(user => {
        if (user.id === id) {
            return { ...user, ...updateUser };
        }
        return user;
    });

    return this.findOne(id)
   }

   delete(id: number) {
    const removeUser = this.findOne(id)

    this.users = this.users.filter(user => user.id !== id)

    return removeUser
   }
}
