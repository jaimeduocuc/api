-- CreateTable
CREATE TABLE `Profesor` (
    `idprofesor` INTEGER NOT NULL,
    `nombre` VARCHAR(30) NOT NULL,
    `apellido` VARCHAR(30) NOT NULL,
    `correo` VARCHAR(60) NOT NULL,
    `contrasena` VARCHAR(18) NOT NULL,

    PRIMARY KEY (`idprofesor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alumno` (
    `idalumno` INTEGER NOT NULL,
    `nombre` VARCHAR(30) NOT NULL,
    `apellido` VARCHAR(30) NOT NULL,
    `correo` VARCHAR(60) NOT NULL,
    `contrasena` VARCHAR(18) NOT NULL,
    `estado` VARCHAR(18) NOT NULL,

    PRIMARY KEY (`idalumno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seccion` (
    `idseccion` INTEGER NOT NULL,
    `codseccion` VARCHAR(30) NOT NULL,
    `seccion` VARCHAR(20) NOT NULL,
    `nombre_seccion` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`idseccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeccionProfesor` (
    `idprofesor` INTEGER NOT NULL,
    `idseccion` INTEGER NOT NULL,

    PRIMARY KEY (`idprofesor`, `idseccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeccionAlumno` (
    `idalumno` INTEGER NOT NULL,
    `idseccion` INTEGER NOT NULL,

    PRIMARY KEY (`idalumno`, `idseccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lista` (
    `idlista` INTEGER NOT NULL,
    `idseccion` INTEGER NOT NULL,
    `fecha_lista` DATETIME(3) NOT NULL,
    `asistencias_totales` INTEGER NULL,
    `ausencias_totales` INTEGER NULL,
    `resultado_query` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`idlista`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SeccionProfesor` ADD CONSTRAINT `SeccionProfesor_idprofesor_fkey` FOREIGN KEY (`idprofesor`) REFERENCES `Profesor`(`idprofesor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeccionProfesor` ADD CONSTRAINT `SeccionProfesor_idseccion_fkey` FOREIGN KEY (`idseccion`) REFERENCES `Seccion`(`idseccion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeccionAlumno` ADD CONSTRAINT `SeccionAlumno_idalumno_fkey` FOREIGN KEY (`idalumno`) REFERENCES `Alumno`(`idalumno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeccionAlumno` ADD CONSTRAINT `SeccionAlumno_idseccion_fkey` FOREIGN KEY (`idseccion`) REFERENCES `Seccion`(`idseccion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lista` ADD CONSTRAINT `Lista_idseccion_fkey` FOREIGN KEY (`idseccion`) REFERENCES `Seccion`(`idseccion`) ON DELETE RESTRICT ON UPDATE CASCADE;
