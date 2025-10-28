import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductsPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection
        imageURL="media/Kite.png"
        productName="Kite"
        productDescription=" our ultrafast flagship trading platform with streaming market data,advanced charts, an elegant UI and more enjoy the Kite experience seamlesslyon your android  and ios devices "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
         <RightSection
          imageURL="media/console.png"
        productName="Console"
        productDescription=" The central dashboard for your Zerodha account.Gain insights in to your trades and investments with in depth reports and visualisations"
        learnMore=""
         />
        <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDescription=" An easy to grasp ,collection of stock market lessons in depth coverage and illustrations.content is broken down in bite-size cards to help you learn on the go "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
         <RightSection
         imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription=" Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.If you are a startup,build your investment appsand showcase it in your client base"
        learnMore=""
         />
         <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDescription=" our ultrafast flagship trading platform with streaming market data,advanced charts, an elegant UI and more enjoy the Kite experience seamlesslyon your android  and ios devices "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
        <Universe/>
        </>
     );
}

export default ProductsPage;