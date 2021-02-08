import Meme from "../models/memes";

let previously_fetched: Array<any>|null = null; 

export const fetch = async({id}:any) => {
    try {
      if(id){
        let meme = await Meme.findOne({where:{id}, attributes:['id', 'url', 'caption', 'name']});
	if(meme){
		return meme;
	}
	else{
		throw "Meme not found";
	}
      }
      else{
        if(previously_fetched){
          return previously_fetched;
        }
        else{
          let _memes = await Meme.findAll({ where: {
            deleted: false
          },
          order:[ 
            ['createdAt', 'DESC'],
          ],
          limit: 100,
          attributes:['id', 'url', 'caption', 'name']
          })
          previously_fetched = _memes;
          return _memes;
        }
      }
    }
    catch (e){
      throw new Error(e);
    }
}

export const createMeme = async ({
  name,
  caption,
  url,
}: any) => {
  try {
    let check = await Meme.findOne({where:{
      url,
      name,
      caption
    }});
    if (check !== null) {
      return "Meme already exist";
    }
    previously_fetched = null;
    let _meme = await new Meme({
      name,
      caption,
      url
    }).save();
    return _meme
  } catch (e) {
    throw new Error(e);
  }
};

export const Update = async ({
  id,
  caption,
  url,
  deleted=false
}: any) => {
  try {
    let _meme = await Meme.findByPk(id);
    if(_meme) {
      previously_fetched = null;
      _meme.caption = caption;
      _meme.url = url;
      _meme.deleted = deleted;
      await _meme.save();
      return _meme;
    }
    else{
      return "Meme doesn't exist";
    }
  } catch (e) {
    throw new Error(e);
  }
}
