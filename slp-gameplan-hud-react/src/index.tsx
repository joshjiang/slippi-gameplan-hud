import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import { PlanSingle } from './components/PlanSingle';
import { Header } from './components/Header';
import { Container } from 'react-bootstrap';
import { PlanNew } from './components/PlanNew';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Header />
        <Route path={"/"} exact render={(props) => {
          return (<App />)
        }} />
        <Route exact path={"/new_plan"} render={(props) => {
          return (<PlanNew />)
        }} />
        <Route path={"/:character/plan"} render={(props) => {
          const character = props.match.params.character
          return (character ? <PlanSingle character={character} /> : <>Character not found</>)
        }} />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
