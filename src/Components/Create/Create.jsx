import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from '../../StudentsCRUD';
import './Create.css';
const Create = () => {
    const [postData, setPostData] = useState({
        name: '',
        department: '',
        photo: '',
        attendance: ''
    });
    const navigate = useNavigate();
    const handleSubmit = async (ele) => {
        ele.preventDefault();
        await createUser(postData)
        setPostData({
            name: '',
            department: '',
            photo: '',
            attendance: ''
        });
        navigate('/');
    }
    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setPostData({
            ...postData, [name]: value
        })
    };
    return (
        <div className="create-main">
            <div>
                <h2>Add New Student</h2>
                <div className="center">
                    <form>

                        <div className="label">
                            <label htmlFor="name" > NAME  </label>
                            <input type="text" name="name" id="name" value={postData.name} onChange={handleChange} required />
                        </div>
                        <div className="label">
                            <label htmlFor="department" >DEPARTMENT</label>
                            <select name="department" id="department" value={postData.department} required onChange={handleChange}>
                                <option value='' selected>--</option>
                                <option >ECE</option>
                                <option  >EEE</option>
                                <option  >CSE</option>
                                <option  >Mech</option>
                                <option  >Civil</option>
                            </select>
                        </div>
                       
                        <div className="label">
                            <label htmlFor="attendance" >ATTENDANCE</label>
                            <select name="attendance" id="attendance" value={postData.attendance} required onChange={handleChange}>
                                <option value='' selected>--</option>
                                <option onChange={handleChange}>Present</option>
                                <option  onChange={handleChange}>Absent</option>
                            </select>
                           
                        </div>
                        <div className="label">
                            <label htmlFor="photo" >PHOTO URL </label>
                            <input type="text" name="photo" id="photo" value={postData.photo} onChange={handleChange} required />
                        </div>
                       
                        <div className="submit-btn">
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create