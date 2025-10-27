/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class ListOptionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const option = await this.prisma.option.findMany({
            include: {
                scores: true,
            }
        });
        if (!option) {throw new NotFoundException("Option not found");}
        return option;
    }
}