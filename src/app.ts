import express from "express";
import { PrismaClient } from "@prisma/client";
import path from 'path';
import bodyParser from "body-parser";
import indexRouter from "./routers/index.router";
import createRouter from "./routers/create.router";
import { parentPort } from "worker_threads";

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routers
app.use('/', indexRouter);
app.use('/ticket-erfassen', createRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
