import React from 'react';

const  Newop=(props)=>
(
 <div className='option'>
 <p className='option__text'>{props.count}. {props.opt}</p>
      
      <button className='button button--link' onClick={(e)=>{props.deleteoption(props.opt)}}>x remove</button>
      </div>
)
export default Newop;