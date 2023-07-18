import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { friends } from './friends';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Card id={friends[1].id} name={friends[1].name} email={friends[1].email}/>
    <Card id={friends[2].id} name={friends[2].name} email={friends[2].email}/>
    <Card id={friends[3].id} name={friends[3].name} email={friends[3].email}/>
    <Card id={friends[4].id} name={friends[4].name} email={friends[4].email}/>
    <Card id={friends[5].id} name={friends[5].name} email={friends[5].email}/>
    <Card id={friends[6].id} name={friends[6].name} email={friends[6].email}/>
    <Card id={friends[7].id} name={friends[7].name} email={friends[7].email}/>
    <Card id={friends[8].id} name={friends[8].name} email={friends[8].email}/>
    <Card id={friends[9].id} name={friends[9].name} email={friends[9].email}/>
    <Card id={friends[10].id} name={friends[10].name} email={friends[10].email}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
