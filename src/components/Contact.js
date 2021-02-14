import React, { useContext } from "react";
import { DbContext } from "../context";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

const Contact = ({ contact }) => {
  const { dispatch } = useContext(DbContext);
  const deleteConfirmMessage = "Are you sure you want to remove " + contact.name + "?";
  return (
    <>
      <div className="card p-3 mt-3 box-shadow" id={"card-" + contact.id}>
        <div className="d-flex align-items-center">
          <div className="image">
            <img
              src={"https://picsum.photos/id/" + contact.addindex + "/200/200"}
              className="rounded"
              width="155"
              alt=""
            />
            <button
              className="deleteContact btn btn-sm btn-danger"
              title="Delete Contact"
              onClick={() => {
                confirmAlert({
                  title: "Remove Contact",
                  message: deleteConfirmMessage,
                  buttons: [
                    {
                      label: "Yes",
                      onClick: () => {
                        dispatch({
                          type: "DELETE_CONTACT",
                          payload: contact.id,
                        });
                        toast.success("Contact removed successfully");
                      },
                    },
                    {
                      label: "No",
                      onClick: () => console.log("Ignore"),
                    },
                  ],
                });
              }}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{contact.name}</h4>
            <span>{contact.email}</span>
            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column"></div>
              <div className="d-flex flex-column text-center">
                <span className="votes">Votes</span>
                <span className="votecalc">{contact.vote}</span>
              </div>
              <div className="d-flex flex-column"></div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <button
                className="btn btn-sm btn-info w-100"
                onClick={() => {
                  contact.vote++;
                  dispatch({ type: "UPVOTE_CONTACT", payload: contact });
                }}
                title="Upvote"
              >
                <i className="fas fa-thumbs-up"></i> +1
              </button>
              <button
                className="btn btn-sm btn-outline-info w-100 ml-2"
                onClick={() => {
                  if (contact.vote > 0) {
                    contact.vote--;
                    dispatch({ type: "DOWNVOTE_CONTACT", payload: contact });
                  }
                }}
                title="Downvote"
              >
                <i className="fas fa-thumbs-down"></i> -1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
