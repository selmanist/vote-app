import React, { useContext, useState } from "react";
import { DbContext } from "../context";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "./Pagination";

const Contacts = () => {
  const { sortedContacts } = useContext(DbContext);
  const [sortType, setSortType] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(5);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = sortedContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  const totalPagesNum = Math.ceil(sortedContacts.length / contactsPerPage);

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="btn-toolbar justify-content-between mt-3" role="toolbar">
        {sortedContacts.length > 5 ? (
          <Pagination
            pages={totalPagesNum}
            setCurrentPage={setCurrentPage}
            currentLength={currentContacts.length}
            totalLength={sortedContacts.length}
          />
        ) : <nav aria-label="pagination"></nav>}

        <div className="input-group input-group-sm">
          <span className="mr-2">Sort by:</span>
          <select
            className="form-control sorting-select"
            onChange={(e) => setSortType(Number(e.target.value))}
          >
            <option value="1">Votes Descending</option>
            <option value="2">Votes Ascending</option>
          </select>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center">
        {currentContacts
          .sort((a, b) =>
            sortType === 1
              ? a.vote < b.vote
                ? 1
                : -1
              : a.vote < b.vote
              ? -1
              : 1
          )
          .map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
      </div>
    </>
  );
};

export default Contacts;
