import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

import { render, screen, fireEvent } from "@testing-library/react";
// import reducer from "../reducers";
// import middleware from "../middleware";

import App from '../components/App';
import LoginPage from '../components/LoginPage';

describe("LoginPage", () => {
    it("should render a snapshot.", () => {
      const component = render(
        <MemoryRouter>
          <Provider store={store}>
            <LoginPage/>
          </Provider>
        </MemoryRouter>
      );
      expect(component).toMatchSnapshot();
    });
    it("should render an error msg because of the wrong data entered.", () => {
      const component = render(
        <MemoryRouter>
          <Provider store={store}>
            <LoginPage/>
          </Provider>
        </MemoryRouter>
      );
      let submitBtn = component.getByTestId("submit-btn");
      fireEvent.click(submitBtn);
      expect(component.getByTestId("submit-btn")).toBeEnabled();
      expect(screen.getByText("It seems that the information entered to log in is invalid. Please try again.")).toBeInTheDocument();
    });
});