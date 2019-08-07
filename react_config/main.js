// 1. Import React Object model
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
// 3. Import bootstrap
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";
// importing simplecomponent.jsx in the main.js 
import SimpleComponent from './components/simplecomponent';
// rendering the SimpleComponent inside  'app' element of index.html
// a. search for SimpleComponent
// b.  if found load it and executes (or invokes) its 'render()'
// c. if render() executed successfully then take the rendered DOM
// and inject in the 'app' 
let msg = 'Hello from Parent';
import StatefulComponent from './components/statefulcomponent.jsx';
import ValidateComponent from './components/validations/validatecomponent.jsx';
import TableComponent from  './components/tableComponent/tablecomponent.jsx';

let  Products= [{ ProductId: 101, ProductName: 'Laptop', Manufacturer: 'IBM', CategoryName: 'Electronics', Price: 120000 }, 
{ ProductId: 102, ProductName: 'Iron', Manufacturer: 'Bajaj', CategoryName: 'Electrical', Price: 1200 }];

let Employees = [
    {EmpNo:1,EmpName:'A'},
    {EmpNo:2,EmpName:'B'},
    {EmpNo:3,EmpName:'C'},
    {EmpNo:4,EmpName:'D'}
];
import ServiceCallComponent from './components/servicecallcomponent.jsx';
ReactDom.render( <ServiceCallComponent/> , document.getElementById("app"));