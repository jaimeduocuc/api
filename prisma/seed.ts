import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Insertar datos en la tabla PROFESOR
  await prisma.profesor.createMany({
    data: [
      {
        idprofesor: 1,
        nombre: "Profesor1",
        apellido: "Apellido1",
        correo: "profesor1@correo.com",
        contrasena: "contraseña1",
      },
      {
        idprofesor: 2,
        nombre: "Profesor2",
        apellido: "Apellido2",
        correo: "profesor2@correo.com",
        contrasena: "contraseña2",
      },
    ],
  })

  // Insertar datos en la tabla ALUMNO
  await prisma.alumno.createMany({
    data: [
      {
        idalumno: 1,
        nombre: "Alumno1",
        apellido: "Apellido1",
        correo: "alumno1@correo.com",
        contrasena: "contraseña1",
        estado: "Activo",
      },
      {
        idalumno: 2,
        nombre: "Alumno2",
        apellido: "Apellido2",
        correo: "alumno2@correo.com",
        contrasena: "contraseña2",
        estado: "Inactivo",
      },
    ],
  })

  // Insertar datos en la tabla SECCION
  await prisma.seccion.createMany({
    data: [
      {
        idseccion: 1,
        codseccion: "SEC101",
        seccion: "A",
        nombre_seccion: "Matemáticas",
      },
      {
        idseccion: 2,
        codseccion: "SEC102",
        seccion: "B",
        nombre_seccion: "Historia",
      },
    ],
  })

  // Insertar datos en la tabla PROFESOR_SECCION
  await prisma.seccionProfesor.createMany({
    data: [
      { idprofesor: 1, idseccion: 1 },
      { idprofesor: 2, idseccion: 2 },
    ],
  })

  // Insertar datos en la tabla ALUMNO_SECCION
  await prisma.seccionAlumno.createMany({
    data: [
      { idalumno: 1, idseccion: 1 },
      { idalumno: 2, idseccion: 2 },
    ],
  })

  // Insertar datos en la tabla LISTA
  await prisma.lista.createMany({
    data: [
      {
        idlista: 1,
        idseccion: 1,
        fecha_lista: new Date("2023-11-14"),
        asistencias_totales: 10,
        ausencias_totales: 0,
        resultado_query: "Query1",
      },
      {
        idlista: 2,
        idseccion: 2,
        fecha_lista: new Date("2023-11-15"),
        asistencias_totales: 9,
        ausencias_totales: 1,
        resultado_query: "Query2",
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
