import React, { createContext, useEffect, useReducer } from "react";
export const DbContext = createContext();

const ContextProvider = (props) => {
  const reducer = (contacts, action) => {
    switch (action.type) {
      case "DELETE_CONTACT":
        return contacts.filter((contact) => contact.id !== action.payload);
      case "ADD_CONTACT":
        return [...contacts, action.payload];
      case "UPVOTE_CONTACT":
        return contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      case "DOWNVOTE_CONTACT":
        return contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      default:
        return contacts;
    }
  };

  const [contacts, dispatch] = useReducer(reducer, [], () => {
    const contacts = localStorage.getItem("contacts");
    return contacts ? JSON.parse(contacts) : [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const maxIndex = Math.max.apply(
    Math,
    contacts.map(function (o) {
      return o.addindex;
    })
  );

  const sortedContacts = contacts.sort((a, b) =>
    a.addindex < b.addindex ? 1 : -1
  );

  return (
    <DbContext.Provider value={{ sortedContacts, maxIndex, dispatch }}>
      {props.children}
    </DbContext.Provider>
  );
};

export default ContextProvider;
