import React from "react";

function Home(){

    return(
        <div>
            <div className="container">
                <h1 style={{color:'#84ca01'}}><span style= {{color:'#000'}}> Welcome to</span> Wagapat GPT</h1>
                <h2>Welcome to our web. If you don't know our web so, this some points obout this website. </h2>
                <div className="container-points">
                    <h3>&#x2022; Miral</h3>
                    <h3>&#x2022; Malak</h3>
                    <h3>&#x2022; Yara</h3>
                    <h3>&#x2022; Mariam</h3>
                    <h3>&#x2022; Mohamed</h3>
                    <h3>&#x2022; Adam</h3> 
                </div>
                <div className="buttons">
                    <button type="submit" fomaction = '/signup'className="button">sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Home;