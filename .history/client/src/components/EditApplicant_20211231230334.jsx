import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditApplicant = () => {
  const { sName, rNumber, sid } = useParams();
  const [message, setMessage] = useState();
  const [studentName, setStudentName] = useState(sName);
  const [registrationNumber, setRegistrationNumber] = useState(rNumber);

  const addDetails = async (e) => {
    e.preventDefault();

    const data = {
      studentName: studentName,
      registrationNumber: registrationNumber,
      sid: sid,
    };

    await axios
      .patch("http://localhost:5000/user/update", data)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      {message && <div className="alert alert-success">{message}</div>}

      <form>
        <label className="mb-2">Student Name</label>
        <input
          type="text"
          className="form-control mb-3"
          name="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <label className="mb-2">Registration Number</label>
        <input
          type="text"
          className="form-control mb-3"
          name="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />

        <button
          className="btn btn-primary form-control"
          onClick={(e) => addDetails(e)}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default EditApplicant;
