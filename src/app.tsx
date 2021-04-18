import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { PlanList } from "./components/PlanList";
import { HashRouter, Route } from "react-router-dom";
import { PlanSingle } from "./components/PlanSingle";
import { Header } from "./components/Header";
import { Container } from "react-bootstrap";
import { PlanNew } from "./components/PlanNew";
import "bootstrap/dist/css/bootstrap.min.css";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Container>
          <Header />
          <Route
            path={"/"}
            exact
            render={() => {
              return <PlanList />;
            }}
          />
          <Route
            exact
            path={"/new_plan"}
            render={() => {
              return <PlanNew />;
            }}
          />
          <Route
            path={"/:character/plan"}
            render={(props) => {
              const character = props.match.params.character;
              return character ? (
                <PlanSingle character={character} />
              ) : (
                <>Character not found</>
              );
            }}
          />
        </Container>
      </HashRouter>
    </React.StrictMode>,
    document.body
  );
}
render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// function render() {
//   ReactDOM.render(<h2>Hello from React!</h2>, document.body);
// }

// render();
