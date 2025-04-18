import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    employee: any;
    async onModuleInit() {
        await this.$connect()
    }
    $connect() {
        throw new Error('Method not implemented.');
    }
}


