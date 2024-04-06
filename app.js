import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement(
    'h1',
    { id: "heading" },
    "Hello From the other side"
);
console.log(heading);

//JSX
//(this code is transpiled before it reaches the JS)-PARCEL's babel module convert this
//Inside this babel module their is 'createElement' like above method which converts this to the understandable format

const jsxHeading = <h1 className="head" tabIndex="1">This is JSX heading</h1>
console.log(jsxHeading);


//The code on the React Element and JSX is same

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(jsxHeading);