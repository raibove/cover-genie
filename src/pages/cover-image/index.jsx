/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './index.css';
import { useNavigate } from "react-router-dom";

const CreateCoverImage = (props)=>{
    let navigate = useNavigate();

    return(
        <div className="page-con">
            <Header/>
            <main>
                {
                    props.post ? (
                       <p>apple</p>
                    ) : (
                        <div>
                            <p>Oops post data missing. Are you sure you selected correct post?</p>
                            <button onClick={()=> navigate('/get-started')}>Try one more time</button>
                        </div>
                    )
                }
            </main>
            <Footer/>
        </div>
    )
}

export default CreateCoverImage;