import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes";

const PORT = process.env.PORT || 3000
const app = express();



app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT, ()=>{
    console.log('Listo el servidor en puerto ' + PORT);
});