import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getSingleUser, updateUser } from "../../StudentsCRUD";
import './Edit.css';
const Edit = () => {
    const [params] = useSearchParams();
    const [postData, setPostData] = useState({
        name: '',
        department: '',
        photo: '',
        attendance: ''
    });
    const navigate = useNavigate()
    const handleSubmit = async (ele) => {
        ele.preventDefault();
        setPostData({
            name: '',
            department: '',
            photo: '',
            attendance: ''
        });
        await updateUser(postData, params.get('id'));
        navigate(`/students/${params.get('id')}`)
    }
    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setPostData({
            ...postData, [name]: value
        });
    };
    const showSingleUser = async () => {
        const response = await getSingleUser(params.get('id'));
        setPostData(response);
    };
    useEffect(() => {
        showSingleUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="edit-main">
            <div>
                <h2>Edit Student Details</h2>
                <div className="center">
                    <form>

                        <div className="label">
                            <label htmlFor="name" >Change name</label>
                            <input type="text" name="name" id="name" value={postData.name} onChange={handleChange} required />
                        </div>
                        <div className="label">
                            <label htmlFor="department" >Change Department</label>
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
                            <label htmlFor="attendance" >Change Attendance</label>
                            <select name="attendance" id="attendance" value={postData.attendance} required onChange={handleChange}>
                                <option value='' selected>--</option>
                                <option onChange={handleChange}>Present</option>
                                <option  onChange={handleChange}>Absent</option>
                            </select>
                            {/* <label htmlFor="attendance" >ATTENDANCE</label> */}
                            {/* <textarea type="text" name="attendance" id="attendance" value={postData.attendance} onChange={handleChange} required /> */}
                        </div>
                        <div className="label">
                            <label htmlFor="photo" >Change Photo URL</label>
                            <input type="text" name="photo" id="photo" value={postData.photo} onChange={handleChange} required />
                        </div>
                        {/* <div>
                            <label htmlFor="privacy" >Change privacy</label>
                            <select name="privacy" id="privacy" value={postData.privacy} onChange={handleChange} required>
                                <option value="private">private</option>
                                <option value="public">public</option>
                            </select>
                        </div> */}
                        <div className="submit-btn">
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit