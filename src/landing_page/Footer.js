import React from 'react'

function Footer() {
    return (
        <footer style={{ backgroundColor :"rgb(250,250,250)"}}>
        <div className="container border-top mt-5">
            <div className="row">
                <div className="col">
                    <img src="media/logo.png" style={{ width: "50%" }} />
                </div>
                <div className="col">
                    <p>Company</p>
                    <a href="">About</a><br />
                    <a href="">Products</a><br />
                    <a href="">Pricing</a><br />
                    <a href="">Referral programme</a><br />
                    <a href="">Careers</a><br />
                    <a href="">Zerodha.tech</a><br />
                    <a href="">Press & media</a><br />
                    <a href="">Zerodhacares(CSR)</a>
                </div>
                <div className="col">
                    <p>Support</p>
                    <a href="">contact</a><br />
                    <a href="">Supporting portal</a><br />
                    <a href="">Z-connect blog</a><br />
                    <a href="">List of charges</a><br />
                    <a href="">Downloads and resources</a>
                </div>
                <div className="col">
                     <p>Account</p>
                    <a href="">Open an account</a><br />
                    <a href="">Fund transfer</a><br />
                    <a href="">60 day challange</a><br />
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;