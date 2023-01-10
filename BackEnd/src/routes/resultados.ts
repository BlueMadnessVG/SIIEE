import { Router } from "express";
import {getResultadoxAlumno, postResultadoCuestionario } from "../controllers/resultados.controller";

const  router = Router();

router.post('/:nro_cuenta/:cuestionario_nombre', postResultadoCuestionario);
router.get('/:nro_cuenta/:cuestionario_nombre', getResultadoxAlumno);

export {router};