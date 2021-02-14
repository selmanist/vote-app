import { useContext, useState } from "react";
import { DbContext } from "../context";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { Alert } from "react-bootstrap";

const AddContact = () => {
  const { dispatch, maxIndex } = useContext(DbContext);
  const [showAlert, setShowAlert] = useState(false);
  const [newContact, setNewContact] = useState({
    id: uniqid(),
    name: "",
    email: "",
    vote: 0,
    addindex: Number(maxIndex) >= 0 ? Number(maxIndex) + 1 : 0,
  });

  const { id, name, email, vote, addindex } = newContact;

  const setInputState = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const AddNewContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        id,
        name,
        email,
        vote,
        addindex,
      },
    });

    handleShowAlert();
  };

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      document.getElementById("go-back").click();
    }, 1000);
  };

  return (
    <div className="row">
      <div className="col-md-12 mb-4 mt-4">
        <Alert show={showAlert} variant="success">
          Contact added successfully
        </Alert>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title d-inline mb-0">
              <i className="fas fa-user-plus"></i> Add New Contact
            </h5>
          </div>
          <form onSubmit={AddNewContact}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="form-control"
                  name="name"
                  value={newContact.name}
                  onChange={(e) => setInputState(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="form-control"
                  name="email"
                  value={newContact.email}
                  onChange={(e) => setInputState(e)}
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-sm btn-primary mr-1">
                Save
              </button>
              <Link to="/" className="btn btn-sm btn-warning" id="go-back">
                Ignore
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
