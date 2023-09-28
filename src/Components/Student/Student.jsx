import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../StudentsCRUD";
import './Student.css';
const Student = () => {
    const { id } = useParams();
    const [singleUser, setSingleUser] = useState({
        name: '',
        department: '',
        photo: '',
        attendance: ''
    });
    const showSingleUser = async () => {
        const response = await getSingleUser(id);
        setSingleUser(response);
    }
    useEffect(() => {
        showSingleUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="post-main">
            <div className="post-card-text">
                <div>
                    <h5>Name : </h5>
                    <p>{singleUser.name}</p>
                    <h5>Department : </h5>
                    <p>{singleUser.department}</p>
                    <h5>Attendance : </h5>
                    <p>{singleUser.attendance}</p>
                </div>
            </div>
            <div className="post-card-image">
                <div>
                    <h5>Student Photo :</h5>
                    <img src={singleUser.photo} alt="userImage" className="singleUser-image" />
                </div>
            </div>
        </div>
    )
}
export default Student