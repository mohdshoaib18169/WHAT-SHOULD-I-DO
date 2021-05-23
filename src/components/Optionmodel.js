  import React from 'react'
  import Modal from 'react-modal'

  const Optionmodel=(props)=>
  ( 
  <Modal isOpen={!!props.isopen}  
    onRequestClose={props.refreshoption}
    contentLabel='selected option'
    closeTimeoutMS={200}
    className='modal'
    >
    <h3 className='modal__title'>Selected Option</h3>
    {props.isopen&&<p className='modal__body'>{props.isopen}</p>}
    <button className='button' onClick={props.refreshoption}>OKAY</button>
    </Modal>
)
export default Optionmodel;