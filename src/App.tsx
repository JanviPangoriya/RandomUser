import React,{memo} from 'react';
import { useState } from 'react';
import RandomAPI from './Component/RandomAPI';

interface Props{

}

const App:React.FC<Props>=(props) => {
  const[page,setPage] = useState(1);

    return(
        <div className="bg-blue-200 w-full h-full">

        <RandomAPI pagenumber={page} />
        <div className=" mx-32 sm:mx-0
         grid grid-cols-1 sm:grid-cols-4  items-center gap-2 bg-red">
        <button className="my-3 sm:col-start-2 py-2 uppercase tracking-wider font-bold text-xl text-white bg-red-400  border-4 border-white hover:bg-red-300" onClick ={()=>{setPage(page+1)}}>
          Next
        </button>
        <button className="sm:my-5 py-2 uppercase tracking-wider font-bold text-xl text-white bg-green-400  border-4 border-white hover:bg-green-300" onClick ={()=>{
          if(page >1 )
          {
          setPage(page=>(page-1))}
          else
          {
            setPage(1)
          }}}>
          Previous
        </button>
        </div>
        </div>
    );

}

App.defaultProps={
    
}
export default memo(App);