import { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
const EditApplicant = () => {
    const { studentName, registrationNumber, sid } = useParams()
    const [applicantData, setApplicantData] = useState({
        studentName: studentName,
        registrationNumber: registrationNumber
    })

    const handleChannge = (e) => {
        setApplicantData({ ...applicantData, [e.target.name]: [e.target.value] })
    }

    const addDetails = async (e) => {
        e.preventDefault();

        const data = {
            studentName: applicantData.studentName.toString(),
            registrationNumber: applicantData.registrationNumber.toString(),
            sid: sid.toString()
        }

        await axios
            .patch("http://localhost:5000/user/update", data)
            .then((response) => {
                console.log(response.data)
            })
            .catch((e) => console.log(e))
    }

    return (
        <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
            <form>
                <label className="mb-2">Student Name</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    name="studentName"
                    value={applicantData.studentName}
                    onChange={(e) => handleChannge(e)}
                />

                <label className="mb-2">Registration Number</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    name="registrationNumber"
                    value={applicantData.registrationNumber}
                    onChange={(e) => handleChannge(e)}
                />

                <button className="btn btn-primary form-control" onClick={(e) => addDetails(e)}>Apply</button>
            </form>
        </div>
    );
}

export default EditApplicant;