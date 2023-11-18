import { PrismaDBClient } from "../driven-adapters/prisma"
import { Profesor } from "@prisma/client"
import { Repository } from "../utils/interfacesAndTypes"

export class PostgresProfessorRepository implements Repository<Profesor> {
  private readonly _prismaClient = PrismaDBClient.getInstance()

  async getAll(): Promise<Profesor[]> {
    return await this._prismaClient.profesor.findMany()
  }

  async getById(id: number): Promise<Profesor | null> {
    const found = await this._prismaClient.profesor.findUnique({
      where: {
        idprofesor: id,
      },
    })

    return found
  }

  async create(data: Profesor): Promise<void> {
    await this._prismaClient.profesor.create({
      data: data,
    })
    return Promise.resolve()
  }

  async updateById(id: number, data: Profesor): Promise<void> {
    await this._prismaClient.profesor.update({
      where: {
        idprofesor: id,
      },
      data: data,
    })
    return Promise.resolve()
  }

  async deleteById(id: number): Promise<void> {
    await this._prismaClient.profesor.delete({
      where: {
        idprofesor: id,
      },
    })
    return Promise.resolve()
  }
}
