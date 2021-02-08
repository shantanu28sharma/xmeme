import { Request, Response } from "express";
import { fetch, createMeme, Update } from "../../services";

export const list = async (req: Request, res: Response) => {
  try {
    const _memes = await fetch(req.params);
    return res.status(200).json(_memes);
  } catch {
    return res.status(404).json({err: "Meme doesn't exist"});
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const _res : any = await createMeme(req.body);
    if(_res === "Meme already exist"){
      return res.status(409).json({err: _res});
    }
    return res.status(200).json({id:_res.id});
  } catch {
    return res.status(404).json({err: "Malformed Request"});
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const _res : any = await Update({...req.body, ...req.params});
    if (_res==="Meme doesn't exist") {
      return res.status(404).json({err: _res});
    }
    else{
      return res.status(200).json({id: _res.id});  
    }
  }
  catch {
    return res.status(404).json({err: "Malformed Request"});
  }
}
