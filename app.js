
import React from "react";
import ReactDOM from "react-dom/client";

//App Header

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/3617331/screenshots/14275204/media/90252e6a4058a695fa18434a1f7453e0.jpg?resize=320x240&vertical=center"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>   
        </div>
    );
};

//style Card

const styleCard = {
    backgroundColor:"#f0f0f0",
}

//Restaurant Card

const RestaurantCard = () =>{
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="foodLogo1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/60808baa6748596c48b439653d31ec8a"></img>
            <h3>Emperors Darbar</h3>
        </div>
    );
};

//App Body

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                < RestaurantCard />
            </div>
        </div>
    );
};



const AppLayout = () => {
    return <div className="app">
        < Header />
        < Body />
    </div>
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />)