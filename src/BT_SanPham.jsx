import React from 'react'

const BT_SanPham = (props) => {
    let {item,setKinh} =props;
  return (
    <div className='border border-2' onClick={(e)=>{
        setKinh(item);
    }}>
        <img src={item.url} style={{width:'80px',height:'50px'}}/>
    </div>
  )
}

export default BT_SanPham