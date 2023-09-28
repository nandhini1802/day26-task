import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../../StudentsCRUD";
import './Home.css';
const Home = () => {
    const [post, setPost] = useState([]);
    const getData = async () => {
        const response = await getUser();
        setPost(response);
        // console.log(response)
    };
    useEffect(() => {
        getData();
    }, []);
    const removeUser = async (postId) => {
        await deleteUser(postId);
        const updatePost = post.filter(({ id }) => postId !== id);
        setPost(updatePost);
    }
    return (
        <div className="main-home" style={{
            backgroundColor: '#ECF0F1'
        }}>
            <div>
                <h2>Students</h2>
                <div className="posts">

                    {post.map((student) => (
                        <div style={{
                            backgroundColor: 'white',
                            width: '250px',
                            height: '380px',
                            borderRadius: '10px',
                            margin: '0px 5px 30px 5px',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            padding: '15px 20px 15px 20px'
                        }} key={student.id}>
                            <div key={student.id} >
                                <div className="header">
                                    <p>{student.name}</p>
                                </div>
                                <div className="image">
                                    <img src={student.photo} alt="user postedImage" />
                                </div>
                                <div className="card-text">
                                    <h4>{student.department}</h4>
                                    <p>{student.attendance}</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button>
                                    <Link to={`/student/${student.id}`} style={{
                                    textDecoration : 'none',
                                    color : 'white'
                                }}>View</Link>
                                </button>
                                <button>
                                    <Link to={`/edit?id=${student.id}`} style={{
                                    textDecoration : 'none',
                                    color : 'white'
                                }}>Edit</Link>
                                </button>
                                <button onClick={() => removeUser(student.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home