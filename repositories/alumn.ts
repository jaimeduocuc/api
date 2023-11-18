import { PrismaDBClient } from "../driven-adapters/prisma"
import { Alumno } from "@prisma/client"
import { Repository } from "../utils/interfacesAndTypes"

export class PostgresAlumnRepository implements Repository<Alumno> {
  private readonly _prismaClient = PrismaDBClient.getInstance()

  async getAll(): Promise<Alumno[]> {
    return await this._prismaClient.alumno.findMany()
  }

  async getById(id: number): Promise<Alumno | null> {
    const found = await this._prismaClient.alumno.findUnique({
      where: {
        idalumno: id,
      },
    })

    return found
  }

  async create(data: Alumno): Promise<void> {
    await this._prismaClient.alumno.create({
      data: data,
    })
    return Promise.resolve()
  }

  async updateById(id: number, data: Alumno): Promise<void> {
    await this._prismaClient.alumno.update({
      where: {
        idalumno: id,
      },
      data: data,
    })
    return Promise.resolve()
  }

  async deleteById(id: number): Promise<void> {
    await this._prismaClient.alumno.delete({
      where: {
        idalumno: id,
      },
    })
    return Promise.resolve()
  }
}
