import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: 'Valid role required'
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}