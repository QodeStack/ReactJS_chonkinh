import React, { useState } from 'react'
import {dataGlasses} from './data/dataGlasses.jsx'
import BT_SanPham from './BT_SanPham.jsx'
import BT_KinhDuocChon from './BT_KinhDuocChon.jsx'
const BT_ChonKinh = () => {
    let [kinh,setKinh] = useState({
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    });
  return (
    <div style={{background:'url(/img/background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh'
        }}>
        <div className='container'>
            <h3 className='text-center'>Try Glasses App Online</h3>
            <div className='d-flex justify-content-between w-75 mx-auto'>
                <div>
                    <BT_KinhDuocChon kinh={kinh} />
                </div>
                <div >
                <img src='img/model.jpg' style={{width:'200px', height:'300px'}}/>
                </div>
            </div>
            <div className='d-flex gap-3 bg-light w-50 flex-wrap mx-auto' style={{margin:'100px'}}>
                {dataGlasses.map((item,index)=>{
                    return <div key={index}>
                        <BT_SanPham item={item} setKinh={setKinh}/>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default BT_ChonKinh