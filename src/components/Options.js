import React from 'react';
import Newop from './Newop';

const Options=(props)=>
(     <div>
  <div className='widgets-header'>
  <h3 >Here are your options</h3>
    <button className='button button--link' onClick={props.removeall}>Remove All</button>
    </div>
         <div>
         {props.arr.length===0&&<p className='widgets-element'>Please add an option to get started !!!</p>}
         </div>
  
        {  props.arr.map((n,index)=>
          {
              return <Newop count={index+1} key={n} opt={n}  deleteoption={props.deleteoption}/>
          })
         }
       </div>
)

export default Options;