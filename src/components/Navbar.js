import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fas fa-vote-yea"></i> Contact Vote
          </Link>
          <div>
            <Link to="/" className="btn btn-sm btn-primary mr-1">
              <i className="fas fa-users"></i> Contacts
            </Link>
            <Link to="/addnew" className="btn btn-sm btn-primary">
              <i className="fas fa-user-plus"></i> Add New
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
