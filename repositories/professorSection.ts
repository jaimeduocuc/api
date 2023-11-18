import { PrismaDBClient } from "../driven-adapters/prisma"
import { SeccionProfesor } from "@prisma/client"
import { Repository } from "../utils/interfacesAndTypes"

export class PostgresProfessorSectionRepository
  implements Repository<SeccionProfesor>
{
  private readonly _prismaClient = PrismaDBClient.getInstance()

  async getAll(): Promise<SeccionProfesor[]> {
    return await this._prismaClient.seccionProfesor.findMany()
  }

  async getAllByProfessorId(id: number): Promise<SeccionProfesor[]> {
    console.log("ME EJECUTO")
    console.log("id")
    console.log(id)
    return await this._prismaClient.seccionProfesor.findMany({
      where: {
        idprofesor: id,
      },
    })
  }

  async getById(id: number): Promise<SeccionProfesor | null> {
    const found = await this._prismaClient.seccionProfesor.findUnique({
      where: {
        idprofesor_idseccion: {
          idprofesor: id,
          idseccion: id,
        },
      },
      include: {
        seccion: true,
        profesor: true,
      },
    })

    return found
  }

  async create(data: SeccionProfesor): Promise<void> {
    await this._prismaClient.seccionProfesor.create({
      data: data,
    })
    return Promise.resolve()
  }

  async updateById(id: number, data: SeccionProfesor): Promise<void> {
    await this._prismaClient.seccionProfesor.update({
      where: {
        idprofesor_idseccion: {
          idprofesor: id,
          idseccion: id,
        },
      },
      data: data,
    })
    return Promise.resolve()
  }

  async deleteById(id: number): Promise<void> {
    await this._prismaClient.seccionProfesor.delete({
      where: {
        idprofesor_idseccion: {
          idprofesor: id,
          idseccion: id,
        },
      },
    })
    return Promise.resolve()
  }
}
