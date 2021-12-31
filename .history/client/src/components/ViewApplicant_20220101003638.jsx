import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewApplicant = () => {
  const [applicantData, setApplicantData] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    getApplicatsDetails();
  }, []);

  const getApplicatsDetails = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + "/get")
      .then((response) => {
        setApplicantData(response.data.students);
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/user/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        getApplicatsDetails();
        setMessage(response.data.message);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      {message && <div className="alert alert-success">{message}</div>}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map((details) => (
            <tr>
              <td>{details.studentName}</td>
              <td>{details.registrationNumber}</td>
              <td>
                <Link
                  to={`/edit/${details._id}/${details.studentName}/${details.registrationNumber}`}
                  className="btn btn-success"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(details._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicant;
