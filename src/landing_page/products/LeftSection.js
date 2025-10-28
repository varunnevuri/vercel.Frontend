import React from 'react'

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return <div className='container mt-5'>
        <div className='row '>
            <div className='col-6 '>
                <img src={imageURL}/>
            </div>
             <div className='col-6 p-5 mt-5'>
             <h1>{productName}</h1>
             <p>{productDescription}</p>
             <div>
                <a href={tryDemo}>Try Demo</a>
             <a href={learnMore} style={{marginLeft:"50PX"}}> Learn more</a>
             </div>
             <div className='mt-3'>
                <a href={googlePlay}><img src='media/googleplaybadge.png' style={{width:"25%"}}/></a>
             <a href={appStore}><img src='media/appstoreBadge.png' style={{marginLeft:"50PX",width:"25%"}}/></a>
             </div>
             </div>
        </div>
    </div>;
       
    
}

export default LeftSection;