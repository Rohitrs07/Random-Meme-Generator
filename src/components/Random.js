import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_APT_KEY;
const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading,setLoading] = useState(false);

    // async function fetchData(){
        
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);        //yha destructuring kri hai or andar se data object ko nikala hai
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);


    // }

    // useEffect( () => {
    //     fetchData()
    // },[]);


    // function clickHandler(){
    //     fetchData();
    // }

    const { gif, loading, fetchData } = useGif();

  return (
    <div className='w-[48%] max-h-max bg-green-400 flex flex-col items-center 
                    rounded-2xl border-2 border-slate-500 pt-4 pb-8 gap-y-6'>
        <h1 className='font-bold text-2xl underline underline-offset-2'> 
            A RANDOM GIF
        </h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width="450"/>)
        }
        
        <button onClick={() =>fetchData()}
            className='w-10/12 bg-green-200 py-[8px] rounded-lg font-semibold text-base
                       cursor-pointer hover:bg-slate-50 transition-all duration-200'
        >
            GENERATE
        </button>
    </div>
  )
};

export default Random;