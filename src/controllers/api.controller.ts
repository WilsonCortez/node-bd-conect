import { phases } from './../models/phases';
import {Sequelize} from 'sequelize';
import {Request, Response} from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({number:nRand})
};

export const nome = (req: Request, res: Response) => {
        let nome: string = req.params.nome;
        res.json({nome: `Seja Muito bem-vindo ${nome}`})
}

export const createPhrases = async (req: Request, res: Response) => {
    let {author, txt} = req.body;
   let newPhrase = await  phases.create({author, txt})
    res.json({id:newPhrase.id, author, txt})
}

export const learPhrases = async  (req: Request, res: Response) => {
   let list = await phases.findAll()
   res.json({list})
}

export const getPhrases = async (req: Request, res: Response) => {
    let {id} = req.params
    let phrase = await phases.findByPk(id);
    if(phrase){
        res.json({phrase})
    }else{
        res.json({error: "Frase não encontrada : < ("})
    }
}

export const updatePhrases = async (req: Request, res: Response) =>{
    let {id} = req.params
    let phrase = await phases.findByPk(id);
    let {author, txt} = req.body
    if(phrase){
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();

        res.json({phrase});
    }else{
        res.json({error: "Frase não encontrada"})
    }
}

export const deletePhrases = async (req: Request, res: Response) => {

    let {id} = req.params
    let phrase = await phases.findByPk(id);
    if(phrase){
        await phrase.destroy();
        res.json({phrase});
    }else{
        res.json({error: "Frase não encontrada"})
    }

}

export const randomPhrases = async (req: Request, res: Response) => {

    let phrase = await phases.findOne({
        order: [
            Sequelize.fn('RAND')
        ]
    })
    if(phrase){
        res.json({phrase})
    }else{
        res.json({error: 'Não há frases cadastradas'})
    }
    

}