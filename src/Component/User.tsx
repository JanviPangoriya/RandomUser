import React from 'react';

interface Props{
email:string;
gender:string;
}

const User:React.FC<Props>=(props) => {
    return(
        <>
        <table className="w-96 mx-auto">
            <tr className="border-collapse border-red-400  w-96 ">
                <td className="w-72 px-3 py-2 border-2 border-collapse border-red-400">{props.email}</td>
                <td className="px-3 py-2 border-2 border-collapse border-red-400">{props.gender}</td>
            </tr>
           
        </table>
        </>
    );

}

User.defaultProps={
    
}
export default User;