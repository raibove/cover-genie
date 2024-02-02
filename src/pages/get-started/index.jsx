/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './index.css';
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../queries/blog-data";

const GetStarted = (props)=>{
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState("");

  let navigate = useNavigate();

    const handleAllPost = async (publicationName) => {
        try{
            if(posts.length===0){
                const res = await getAllPosts(publicationName, 20);
                console.log(res, publicationName)
                setPosts(res.edges)
                if(!res){
                    throw 'publication not found'
                }
            }
        } catch(err){
            console.error("Error fetching blog data: ", err);
            setError(true);
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=> {
        const publicationName = localStorage.getItem('publicationName');
        handleAllPost(publicationName);
    },[])

    
  const handleSelectChange = (event) => {
    const postId = event.target.value;
    setSelectedPost(postId)
    console.log('<< called', postId)
  };

    return(
        <div className="page-con">
            <Header/>
            <main className="home-con">
            {
                error ? <div><p>Oops something went wrong. Are you sure you entered right data?</p><button onClick={()=> navigate('/')}>Try one more time</button></div>
                :
                loading ? <p>Using one wish, please wait till its granted</p> : (
                    // content for select
                    <div>
                    <h3>Select content comes here</h3>
                    <select onChange={handleSelectChange} value={selectedPost}>
                    <option value="">Select a Post</option>
                    {posts.map((post) => (
                      <option key={post?.node?.id} value={post?.node?.id}>
                        {post?.node?.title}
                      </option>
                    ))}
                  </select>
                  <button onClick={()=>{
                    if(selectedPost.length === 0){
                        alert("Please select a valid post");
                    } else {
                        props.setPost(selectedPost);
                        navigate('/create-cover-image');
                    }
                  }}>Create Cover Image</button>
                  </div>
                )
            }
            </ main>
            <Footer/>
        </div>
    )
}

export default GetStarted;