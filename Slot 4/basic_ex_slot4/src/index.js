import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from "./NamePerson";
import Ex2 from './Ex2';
import PeopleList from './PeopleList';
import TableOfPeople from './Ex4';
import FirstTeenager from './FirstTeenager';
import AreAllTeenagers from './AreAllTeenagers';
import Sort from './Sort';
import Find from './Find';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <Ex2 />
    <PeopleList />
    <TableOfPeople />
    <FirstTeenager />
    <AreAllTeenagers />
    <Sort/>
    <Find />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
