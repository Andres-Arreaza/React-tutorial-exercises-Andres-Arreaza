import React from "react"; // Main React.js library

import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

// WHAT: This variable contains the html to render
let ouput = (
	<span>
		James is <strong>12</strong> years old
	</span>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(ouput, myDiv);
