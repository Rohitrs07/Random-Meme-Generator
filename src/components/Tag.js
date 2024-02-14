import useGif from '../hooks/useGif';
import React, { useState } from 'react';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_APT_KEY;
const Tag = () => {

    // const [gif, setGif] = useState('');
    // const [loading,setLoading] = useState(false);
    // const [tag,setTag] = useState('car');

    // async function fetchData(){
        
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);        //yha destructuring kri hai or andar se data object ko nikala hai
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);


    // }

    // useEffect( () => {
    //     fetchData()
    // },[]);


    const [tag,setTag] = useState('car');
    const { gif, loading, fetchData} = useGif(tag);


    // function clickHandler(){
    //     fetchData();
    // }

    // function changeHandler(event){
    //     setTag(event.target.value);
    // }

  return (
    <div className='w-[48%] max-h-max bg-blue-400 flex flex-col items-center 
                    rounded-2xl border-2 border-slate-500 pt-4 pb-8 '>
        <h1 className='font-bold uppercase text-2xl underline underline-offset-2 mb-6'> 
            RANDOM {tag} GIF
        </h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width="450"/>)
        }

        <input type='text' 
            //    onChange={changeHandler}
               onChange={(event) => (setTag(event.target.value))}
               value={tag}
               className='w-10/12 bg-slate-50 py-[10px] rounded-lg mt-8 mb-2 text-center'/>
        
        <button onClick={() => fetchData(tag)}
            className='w-10/12 bg-blue-200 py-[8px] rounded-lg font-semibold text-base
                       cursor-pointer hover:bg-slate-50 transition-all duration-200'
        >
            GENERATE
        </button>
    </div>
  )
};

export default Tag;