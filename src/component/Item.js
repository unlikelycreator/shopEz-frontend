import React from 'react'


const Item = ({item, deleteItem}) => {
  return (
    <div className='item' onClick={deleteItem}>
        <div className='text'>{item}</div> 
    </div>
  )
}

export default Item