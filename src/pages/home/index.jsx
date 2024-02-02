import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import './index.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
    const [publicationName, setPublicationName] = useState(localStorage.getItem('publicationName') || '');
    const [pat, setPat] = useState(localStorage.getItem('pat') || '');


    const handleGetStarted = () => {
        if (!publicationName || !pat) {
            alert('Please enter publication name and PAT.');
            return;
        }
        localStorage.setItem('publicationName', publicationName);
        localStorage.setItem('pat', pat);
        navigate('/get-started');
    };

    return (
        <div className="page-con">
            <Header />
            <main>
            <div className="home-con">
                <h2>Create Cover Images for your hashnode blogs easily</h2>
                <div>
                    <h3>1. Enter publication name</h3>
                    <input value={publicationName} onChange={(e) => setPublicationName(e.target.value)} />
                </div>
                <div>
                    <h3>2. Enter PAT</h3>
                    <input value={pat} onChange={(e) => setPat(e.target.value)} />
                </div>
                <button onClick={handleGetStarted}>Get Started</button>
            </div>
            </ main>
            <Footer />
        </div>
    );
}

export default Home;
