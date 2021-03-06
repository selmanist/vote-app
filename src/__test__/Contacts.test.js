import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Contacts from "../components/Contacts";
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

it("render contacts", async () => {
  
  await act(async () => {
    render(
      <ContextProvider>
        <Contacts />
      </ContextProvider>,
      container
    );
  });

  expect(container.textContent).toBe("Sort by:Votes DescendingVotes Ascending");

});
