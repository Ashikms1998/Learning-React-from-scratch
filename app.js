import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const heading = (
<h1 className="head" tabIndex="1">
    This is JSX heading
</h1>
);

const elem = <span>This is a new element</span>

console.log(heading);

const fn = () => true;

const fn2= () => {
    return true;
};

//above function fn and fn2 are same this format is what we have written down

// React Component
//1.Class based component -OLD
//2.Functional compnent -NEW

//REACT functional component

const HeadingComponent = () =>{
    return <h1 className="heading">This is functional component in JSX</h1>
}


const HeadingComponent2 = () =>( 
    <div id="container">
         {elem}
        <h1>{"this is jS inside functional component"}</h1>
        <h2>{2000+3000}</h2>
        {heading} {/*Tthis is react element calling that we written above inside a functional componet */}
         < HeadingComponent /> {/*calling another functional component written above so Thiscode is also called component composition*/}
        <HeadingComponent></HeadingComponent> {/* The line above and this line is same */}
        {HeadingComponent()}{/* You can also call this as a function */}
        <h1 className="heading">This is functional component in JSX2</h1>
    </div>
);

//above function HeadingComponent and HeadingComponent2 are same this format is what we have written down

const root = ReactDOM.createRoot(document.getElementById("root"));
//Rendering React Element
root.render(heading);

//Rendering React Functional Component
root.render(< HeadingComponent2 />)