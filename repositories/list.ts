import { PrismaDBClient } from "../driven-adapters/prisma"
import { Lista } from "@prisma/client"
import { Repository } from "../utils/interfacesAndTypes"

export class PostgresListRepository implements Repository<Lista> {
  private readonly _prismaClient = PrismaDBClient.getInstance()

  async getAll(): Promise<Lista[]> {
    return await this._prismaClient.lista.findMany()
  }

  async getById(id: number): Promise<Lista | null> {
    const found = await this._prismaClient.lista.findUnique({
      where: {
        idlista: id,
      },
    })

    return found
  }

  async create(data: Lista): Promise<void> {
    await this._prismaClient.lista.create({
      data: data,
    })
    return Promise.resolve()
  }

  async updateById(id: number, data: Lista): Promise<void> {
    await this._prismaClient.lista.update({
      where: {
        idlista: id,
      },
      data: data,
    })
    return Promise.resolve()
  }

  async deleteById(id: number): Promise<void> {
    await this._prismaClient.lista.delete({
      where: {
        idlista: id,
      },
    })
    return Promise.resolve()
  }
}
