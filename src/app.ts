import express from "express";
import { PrismaClient } from "@prisma/client";
import path from 'path';
import bodyParser from "body-parser";
import indexRouter from "./routers/index.router";
import createRouter from "./routers/create.router";
import readRouter from "./routers/read.router";
import editRouter from "./routers/edit.router";
import deleteRouter from "./routers/delete.router";
import loginRouter from "./routers/login.router";

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routers
app.use('/', loginRouter);
app.use('/ticket-erfassen', createRouter);
app.use('/ticket-anzeigen', readRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
