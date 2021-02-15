import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AddContact from "../components/AddContact";
import ContextProvider from "../context";
import { BrowserRouter as Router } from "react-router-dom";

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

it("render contact form", async () => {
  await act(async () => {
    render(
      <ContextProvider>
        <Router>
          <AddContact />
        </Router>
      </ContextProvider>,
      container
    );
  });

  expect(container.querySelector("[data-testid='contact-name']").getAttribute("placeholder")).toEqual("Enter Name");
  expect(container.querySelector("[data-testid='contact-email']").getAttribute("placeholder")).toEqual("Enter Email");
  
});
