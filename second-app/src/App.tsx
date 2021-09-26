import React,{useEffect, useState} from 'react';
import axios from "axios";
import "./index.css";
import Pagination from './Pagination';

function App() {
  const [res,setRes]=useState([]);
  const[showPerPage,setshowPerPage]=useState(4);
  const[pagination,setpagination]=useState({
    start:0,
    end:showPerPage,
  });
  const onPaginationChange =(start:number,end:number)=>{
    setpagination({start:start,end:end});
     
  }




  useEffect(()=>{ 
  axios.get(`https://reqres.in/api/users`)
  .then((posRes)=>{
      const{data}=posRes;  /*actual data*/
      setRes(data.data);


  },(errRes)=>{
      console.log(errRes);
  });
},[]);

  return (
    <React.Fragment>
      <table>  
        <tbody>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>FIRST NAME</th> 
                    <th>LAST NAME</th> 
                    <th>Image</th> 
                </tr>
               {res.slice(pagination.start,pagination.end).map((element:any,index:number )=>(
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.email}</td>
                        <td>{element.first_name}</td>
                        <td>{element.last_name}</td>
                        <td><img width="120" height="120" src={element.avatar}></img></td>
                        
                  
                    </tr>
                    
               ))}
               </tbody>
                
                </table>
                <br></br>
                <Pagination key1={showPerPage} key2={onPaginationChange} key3={res.length} />         
    </React.Fragment>
  )
};

export default App;