import {useEffect, useState} from 'react';
import axios from '../../utils/axios';
import Card from '../card/card';

function List() {
    const [memes, setMemes] = useState<any>([]);
    useEffect(()=>{
        const init = async() => {
            let res = await axios.get('/memes');
            res = await res.data;
            setMemes(res);
        }
        init();
    },[])
    return (
        <div style={{paddingTop:"10px", marginBottom:"60px"}}>
                <div className="d-flex flex-row flex-wrap justify-content-sm-around">
                    {memes.map((meme:any) => (
                        <Card url={meme.url} Name={meme.name} caption={meme.caption} id={meme.id}/>
                    ))}
                </div>
        </div>
    )
}

export default List;