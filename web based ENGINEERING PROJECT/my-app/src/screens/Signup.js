import React from 'react'
import './Signup.css'
import Crypto from '../screens/img/product-insurance.png'
import Insurance from '../screens/img/Insurance.png'
import auto from '../screens/img/banner-auto-insurance.jpg'



const Signup = () => {
    return (

<div>
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                       
                        <button  className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
            </div>




<div className='signup2'>
<div className='container2'>
    {/* left */}
    <div className='left2'>
        <img src={Insurance} alt='' />
    </div>

    {/* right */}
    <div className='right2'>
        <h2 className='title2'>Earn passive income with crypto.</h2>
        <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
        <div className='input-container2'>
           
            <button  className='btn btn2'>Learn More</button>
        </div>
    </div>
</div>
</div>











<div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={auto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                       
                        <button  className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
            </div>









</div>
      
    )
}

export default Signup
