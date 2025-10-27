/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class ListScenarioRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const scenario = await this.prisma.scenario.findMany({
            include: {
                options: true,
            }
        });;
        if (!scenario) {throw new NotFoundException("Scenario not found");}
        return scenario;
    }
}