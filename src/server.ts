import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import aipRoutes from './routes/apis'

dotenv.config();

const server = express();

server.use(cors({
    origin: 'https://resttesttest.com',
    methods: ['GET', 'POST']
}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(aipRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);