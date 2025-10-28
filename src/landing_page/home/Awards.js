import React from 'react'

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
             <div className='col-6 p-5'>
             <img src='media/largestBroker.png'/>
             </div>
             <div className='col-6 p-5 mt-3'>
               <h1>"Invest Smarter .Trade Better"</h1>
               <p className=' text-muted mx-3 '>TradeNova helps you make confident investment decisions with modern tools and AI powered chatbot for instant guidance</p>
               <h3 className='mx-3'>Why TradeNova?</h3>
               <ul>
                <li>
                    <p className='text-muted'> <b>AI chatbot Assistant </b>-get instant access to trading questions and personalized guidance </p>
                </li>
                <li>
                    <p className='text-muted'><b>Smart portfolio tools</b>-track and manage your investments effortlessly </p>
                </li>
                <li>
                    <p className='text-muted'><b>For everyone</b>-simple for beginners and powerful for experienced traders</p>
                </li>
               </ul>
             </div>
            </div>
        </div>
    );
}

export default Awards;