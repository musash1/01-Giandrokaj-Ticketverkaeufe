import express from "express";
import path from 'path';
import bodyParser from "body-parser";
import indexRouter from "./routers/index.router";
import createRouter from "./routers/create.router";
import readRouter from "./routers/read.router";
import editRouter from "./routers/edit.router";
import deleteRouter from "./routers/delete.router";
import loginRouter from "./routers/login.router";
import {check, validationResult} from "express-validator";

const app = express();
const port: number = Number(process.env.PORT) || 3000;

const urlencodedparser = bodyParser.urlencoded({ extended: false})

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
