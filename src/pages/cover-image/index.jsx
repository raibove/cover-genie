// import { useState, useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './index.css';
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

const CreateCoverImage = ()=>{
    let navigate = useNavigate();

    return(
        <div>
            <Header/>
            
            <Footer/>
        </div>
    )
}

export default CreateCoverImage;