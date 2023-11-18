import { PrismaDBClient } from "../driven-adapters/prisma"
import { SeccionAlumno } from "@prisma/client"
import { Repository } from "../utils/interfacesAndTypes"

export class PostgresAlumnSectionRepository
  implements Repository<SeccionAlumno>
{
  private readonly _prismaClient = PrismaDBClient.getInstance()

  async getAll(): Promise<SeccionAlumno[]> {
    return await this._prismaClient.seccionAlumno.findMany()
  }

  async getAllByAlumnId(id: number): Promise<SeccionAlumno[]> {
    return await this._prismaClient.seccionAlumno.findMany({
      where: {
        idalumno: id,
      },
    })
  }

  async getById(id: number): Promise<SeccionAlumno | null> {
    const found = await this._prismaClient.seccionAlumno.findUnique({
      where: {
        idalumno_idseccion: {
          idalumno: id,
          idseccion: id,
        },
      },
      include: {
        seccion: true,
        alumno: true,
      },
    })

    return found
  }

  async create(data: SeccionAlumno): Promise<void> {
    await this._prismaClient.seccionAlumno.create({
      data: data,
    })
    return Promise.resolve()
  }

  async updateById(id: number, data: SeccionAlumno): Promise<void> {
    await this._prismaClient.seccionAlumno.update({
      where: {
        idalumno_idseccion: {
          idalumno: id,
          idseccion: id,
        },
      },
      data: data,
    })
    return Promise.resolve()
  }

  async deleteById(id: number): Promise<void> {
    await this._prismaClient.seccionAlumno.delete({
      where: {
        idalumno_idseccion: {
          idalumno: id,
          idseccion: id,
        },
      },
    })
    return Promise.resolve()
  }
}
