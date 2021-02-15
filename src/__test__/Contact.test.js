import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Contact from "../components/Contact";
import ContextProvider from "../context";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render contact data", async () => {
    const fakeContact = {
      name: "Selman",
      email: "selmanist@gmail.com",
      vote: 25,
      addindex: 0
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeContact)
      })
    );
  
    await act(async () => {
      render(<ContextProvider><Contact contact={fakeContact} /></ContextProvider>, container);
    });
  
    expect(container.querySelector("h4").textContent).toBe(fakeContact.name);
    expect(container.querySelector("span.votecalc").textContent).toBe(fakeContact.vote.toString());
  
    global.fetch.mockRestore();

  });
