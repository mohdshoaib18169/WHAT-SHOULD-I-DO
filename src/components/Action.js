import React from 'react'
const Action=(props)=>
    (
         <div>
        <button className='big-button' disabled={props.len===0} onClick={props.showrandomop}>What Should I Do ?</button>
           </div>

    )
    export default Action;