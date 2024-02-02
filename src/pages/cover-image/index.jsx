/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './index.css';
import { useNavigate } from "react-router-dom";

const CreateCoverImage = ({post})=>{
    
    const canvasRef = useRef(null);
    let navigate = useNavigate();
    console.log(post)

    const downloadImage = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'cover_image.png';
        link.href = canvas.toDataURL();
        link.click();
      };

      const drawImage = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        // Set canvas dimensions
        canvas.width = 1600;
        canvas.height = 840;
    
        // Draw background
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        // Draw title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 36px Arial';
        ctx.fillText(post.node.title, 50, 100);
    
        // Draw subtitle
        ctx.font = '24px Arial';
        ctx.fillText(post.node.subtitle, 50, 150);
      };

      
    return(
        <div className="page-con">
            <Header/>
            <main>
                {
                    post ? (
                        <div>
                            <canvas ref={canvasRef} />
                            <button onClick={drawImage}>Create Cover Image</button>
                                <button onClick={downloadImage}>Download Cover Image</button>
                        </div>
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