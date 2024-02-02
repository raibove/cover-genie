// import { useState, useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './index.css';
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    let navigate = useNavigate();

    return(
        <div style={{margin:'auto', width: '100vw'}}>
          <Header/>
            <div className="home-con">
                <h2>Create Cover Images for your hashnode blogs easily</h2>
                <div>
                    <h3>1. Enter publication name</h3>
                    <input />
                </div>
                <div>
                    <h3>2. Enter PAT</h3>
                    <input />
                </div>
                <button onClick={()=>{navigate('/get-started')}}>Get Started</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;