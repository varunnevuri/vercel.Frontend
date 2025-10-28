import React from 'react'
function Hero() {
    return ( 
        <div className="container ">
            
             <div className="row p-4 mt-5 border-bottom text-center" >
                <h1 >pricing</h1>
                <h3 className="text-muted  mt-3 fs-5">Free equity investments and flat 20 rupees  traday and F&O trades </h3>
                </div>
                <div className="row p-4 mt-5 border-bottom text-center" >

               <div className='col-4 p-4'>
                <img src="media/pricingequity.png" style={{width:"75%"}}/>
                <h1 className='fs-3'>Free equity delivery</h1>
                <p className='text-muted '>All equity delivery  investments (NSE,BSE),are absolutely free zero Brokerage</p>
                </div>

              <div className='col-4 p-4'>
                <img src="media/intradaytrades.png" style={{width:"100%"}}/>
                <h1 className='fs-3'>Intraday & F&O trades</h1>
                <p className='text-muted '>Flat  Rs.20 or 0.03%(whichever is lower )per executed order on intraday tardes across equity,currency and commodity trades</p>
                </div>

                <div className='col-4 p-4'>
                <img src="media/pricingequity.png" style={{width:"75%"}}/>
                <h1 className='fs-3'>Free direct MF</h1>
                <p className='text-muted '>All direct mutual funds are absolutely free that is Zero commision and DP charges</p>
                </div>
            </div>  
        </div>
     );
}

export default Hero;