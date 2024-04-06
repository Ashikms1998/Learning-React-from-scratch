import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div",{id:'parent'},[
React.createElement("div",{id:"child"},[
React.createElement('h1',{},"This is the changed stuff vro"), 
React.createElement('h2',{},"This is the second Child"),
]),
React.createElement("div",{id:"child2"},[
React.createElement("h3",{},"This is child number 3"),
React.createElement("h4",{},"This is child number 4"),
]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)