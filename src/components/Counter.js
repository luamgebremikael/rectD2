//from flask import render_template
import { useState } from 'react'


export default function Counter(props) {
    console.log(props)
    const [count, setCount] = useState(props.initialCount||0)
  
    console.log('TEST')

    
    function increment(incrementor) {
        setCount(count+incrementor)
        
    }
    function decrement() {
        setCount(count-1)
        
    }
    function conditionalButtons(){
        if (count>0){
            return(
                <button onClick={ () =>{ decrement (-1)}}> decrement </button>
            )
        }
    }

    return(
        //html that needs be rendier
        //can only have on parent elelment
        <div>
            <h2>  {props.title||' My counter' }</h2>
      
           count: { count }
           <div>
           <button onClick={ () =>{increment (1)}}>Increment</button>
           {
            (count > 0)?
            <button onClick={ () =>{ decrement (-1)}}> decrement </button>
            :
            <></>
           }
          
           <button onClick={ () =>{increment(5) }}> Add 5</button>
           </div>
        </div>
    )
}