import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContextProvider from "../context";
import Contacts from "../components/Contacts";

Enzyme.configure({ adapter: new Adapter() });

describe("Contacts", () => {
  it("Render", () => {
    const wrapper = mount(
      <ContextProvider>
        <Contacts />
      </ContextProvider>
    );
    console.log(wrapper);
  });
});
