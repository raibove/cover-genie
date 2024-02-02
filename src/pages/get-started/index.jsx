// import { useState, useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './index.css';
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

const GetStarted = ()=>{
    let navigate = useNavigate();

    return(
        <div>
            <Header/>
            <input placeholder="Enter publication name"/>
            <input placeholder="Enter PAT"/>
            <Button buttonText="Create Cover Images" handleClick={()=>{navigate("../create-cover-image");}}/>
            <Footer/>
        </div>
    )
}

export default GetStarted;