

//include images into your bundle

import React from "react";
import NavBar from "./navbar.jsx";
import BootstrapCard from "./boostrapcard.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<BootstrapCard/>
			<Jumbotron/>
			<Footer/>
			<NavBar/>
			
		</div>
	);
};

export default Home;
