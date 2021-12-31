import { useState } from "react";
import axios from "axios";
const AddApplicant = () => {
  const [studentName, setStudentName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const addDetails = async (e) => {
    e.preventDefault();

    const data = {
      studentName: studentName,
      registrationNumber: registrationNumber,
    };
    console.log(data);
    await axios
      .post("http://localhost:5000/user/add", data)
      .then((response) => {
        console.log(response.data);
        setStudentName("");
        setRegistrationNumber("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <form>
        <label className="mb-2">Student Name</label>
        <input
          type="text"
          className="form-control mb-3"
          name="studentName"
          onChange={(e) => setStudentName(e.target.value)}
        />

        <label className="mb-2">Registration Number</label>
        <input
          type="text"
          className="form-control mb-3"
          name="registrationNumber"
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

export default AddApplicant;
