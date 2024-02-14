import Random from './components/Random';
import Tag from './components/Tag';


export default function App() {
  return (
    <div className='w-full max-h-max flex flex-col background items-center py-[40px] gap-y-[40px]'>
        
        <h1 className='w-11/12 bg-slate-50 text-center rounded-2xl text-3xl font-bold py-[17px]'>
            RANDOM GIFS
        </h1>
        <div className='flex flex-col w-full items-center gap-y-[40px]'>
          <Random />
          <Tag />
        </div>

    </div>
  );
}
