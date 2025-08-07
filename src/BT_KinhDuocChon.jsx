import React from 'react'

const BT_KinhDuocChon = (props) => {
    let {kinh} = props;
  return (
    <div className='position-relative'>
        <img src='img/model.jpg' style={{width:'200px', height:'300px'}}/>
        <div className='position-absolute' style={{bottom:'0px',
            backgroundColor: 'rgba(255, 0, 0, 0.5)'
        }}>
        <h4 className='m-0 text-success'>{kinh.name}</h4>
        <p className=' m-0'>{kinh.price}</p>
        <p className='m-0 text-white' style={{fontSize:'12px'}}>{kinh.desc}</p>
        </div>
        <img className='position-absolute m-0' src={kinh.url} style={{width:'90px',height:'40px',top:'80px',right:'55px',opacity: '0.6'}}/>
    </div>
  )
}

export default BT_KinhDuocChon