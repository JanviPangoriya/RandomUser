import { throws } from 'assert';
import axios from 'axios';
import React,{memo} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

interface Props{
pagenumber:number;
}

const RandomAPI:React.FC<Props>=(props) => {
    const [user,setUserList] = useState<any>([]);
    const[error1,setError] = useState("");
    useEffect( ()=>{
  axios.get("https://randomuser.me/api/?inc=id,email,gender,name&page=" +props.pagenumber+"&results=20")
     .then((docs)=> {
setUserList(docs.data.results)})
.catch((err) =>
{
    console.log("something went wrong" + err)
    throws (() => "something went wrong");
})


    },[props.pagenumber])
    
    return(
        <>
        
        <div className="pt-10">
            <div className="text-center
            mb-5 text-4xl text-transparent
            uppercase font-bold bg-gradient-to-tr from-red-800 to-yellow-400 bg-clip-text">
                Random User Page {props.pagenumber}
            </div>
 
        {user.map((u:any) => {
            return <User email={u.email} gender={u.gender}/>
        }
        )}
        </div>
        </>
    );

}

RandomAPI.defaultProps={
    
}
export default memo(RandomAPI);