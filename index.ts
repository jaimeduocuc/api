import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PostgresAlumnRepository } from "./repositories/alumn";
import { PostgresAlumnSectionRepository } from "./repositories/alumnSection";
import { PostgresListRepository } from "./repositories/list";
import { PostgresProfessorRepository } from "./repositories/professor";
import { PostgresProfessorSectionRepository } from "./repositories/professorSection";
import { PostgresSectionRepository } from "./repositories/section";

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("ORIGIN: ", origin)
       if (true) {
          callback(null, true);
       } else {
       }
    },
 })
)
app.use(express.json());

// oracledb.initOracleClient()
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
dotenv.config();

const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const DB_URL = process.env.DB_URL;

const PORT = process.env.PORT || 4000;

if (USER_DB == null || PASSWORD_DB == null || DB_URL == null) {
  console.error(
    "Debe configurar las variables de entorno USER_DB, PASSWORD_DB y DB_URL"
  );
  process.exit(1);
}

console.log("USER_DB: " + USER_DB);
console.log("PASSWORD_DB: " + PASSWORD_DB);
console.log("DB_URL: " + DB_URL);



app.get("/obtenerProfesor", async (req, res) => {
  const repo = new PostgresProfessorRepository();
  const data = await repo.getAll();
  return res.status(200).json(data);
});

app.get("/obtenerAlumnos", async (req, res) => {
  const repo = new PostgresAlumnRepository();
  const data = await repo.getAll();
  return res.status(200).json(data);
});

app.get("/obtenerSecciones", async (req, res) => {
  const repo = new PostgresSectionRepository();
  const data = await repo.getAll();
  return res.status(200).json(data);
});

app.get("/obtenerAlumnoSeccion", async (req, res) => {
  const repo = new PostgresAlumnSectionRepository();
  const data = await repo.getAll();
  return res.status(200).json(data);
});

app.get("/obtenerLista", async (req, res) => {
  const repo = new PostgresListRepository();
  const data = await repo.getAll();
  return res.status(200).json(data);
});

app.get("/obtenerProfesor_Seccion", async (req, res) => {
  const repo = new PostgresProfessorSectionRepository();
  const data = await repo.getAll();
  return res.status(200).json(data);
});

// dasokdsaok REVISAR

app.get("/obtenerSeccionesPorProfesor", async (req, res) => {
  const idProfesor = req.query.idProfesor

  if (idProfesor === "undefined") {
    return res.status(200).json([]);
  }

  const repo = new PostgresProfessorSectionRepository();
    const data = await repo.getAllByProfessorId(Number(idProfesor));
    return res.status(200).json(data);
});

app.get("/obtenerSeccionesPorAlumno", async (req, res) => {
  const idAlumno = req.query.idAlumno;

  if (idAlumno === "undefined") {
    return res.status(200).json([]);
  }

  const repo = new PostgresAlumnSectionRepository();
  const data = await repo.getAllByAlumnId(Number(idAlumno));
  return res.status(200).json(data);
});

app.get("/obtenerAlumnosAsistencia", async (req, res) => {
  const repo = new PostgresAlumnSectionRepository();
  const data = await repo.getAll();
  return res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
});
