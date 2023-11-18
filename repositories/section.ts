import { PrismaDBClient } from "../driven-adapters/prisma"
import { Seccion } from "@prisma/client"
import { Repository } from "../utils/interfacesAndTypes"

export class PostgresSectionRepository implements Repository<Seccion> {
  private readonly _prismaClient = PrismaDBClient.getInstance()

  async getAll(): Promise<Seccion[]> {
    return await this._prismaClient.seccion.findMany()
  }

  async getById(id: number): Promise<Seccion | null> {
    const found = await this._prismaClient.seccion.findUnique({
      where: {
        idseccion: id,
      },
    })

    return found
  }

  async create(data: Seccion): Promise<void> {
    await this._prismaClient.seccion.create({
      data: data,
    })
    return Promise.resolve()
  }

  async updateById(id: number, data: Seccion): Promise<void> {
    await this._prismaClient.seccion.update({
      where: {
        idseccion: id,
      },
      data: data,
    })
    return Promise.resolve()
  }

  async deleteById(id: number): Promise<void> {
    await this._prismaClient.seccion.delete({
      where: {
        idseccion: id,
      },
    })
    return Promise.resolve()
  }
}
