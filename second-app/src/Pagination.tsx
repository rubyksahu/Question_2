import React,{useState,useEffect} from 'react';
const Pagination = (props:any) => {
    const[counter,setCounter]=useState(1);
    useEffect(()=>{
        const value= props.key1 * counter;
        props.key2(value -props.key1,value);
    },[counter]);
    const onButtonClick=(type:any)=>{
        if(type ==="previous"){
            if(counter ===1){
                setCounter(1)
            }else{
                setCounter(counter-1)
            }

        }else if(type ==="next"){ 
            if(Math.ceil((props.key3)/(props.key1))==counter){
                setCounter(counter);
            }else{
                setCounter(counter+1);
            }

        }

    };
    return (
        <div className="d-flex justify-content-between">
           <button className = "btn btn-primary "
            onClick={()=>onButtonClick('previous')}>Previous</button> 
           <button className = "btn btn-primary "
            onClick={()=>onButtonClick('next')}>Next</button>

        </div>
    ) 
}

export default Pagination;