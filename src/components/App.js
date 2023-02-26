import React, { useState } from "react";
import Nav from "./Nav";
import Hog from "./Hog";

import hogs from "../porkers_data";

function App() {

	const [showAllHogs, setShowAllHogs] = useState(true)
	const [sortByName, setSortByName] = useState(true)
	const [hogsToDisplay, setHogsToDisplay] = useState([...hogs])

	const handleFilerClick = function(event) {
		setShowAllHogs(showAllHogs => !showAllHogs)
		setHogsToDisplay(hogs.filter(hog => !showAllHogs || hog.greased))
	}

	const handleSortClick = function(event) {
		setSortByName(sortByName => !sortByName)
		setHogsToDisplay([...hogsToDisplay].sort((a, b) => {
			const sortBy = sortByName ? "name" : "weight"
			const nameA = a[sortBy]
			const nameB = b[sortBy]
			if (nameA < nameB) {
			  return -1;
			}
			if (nameA > nameB) {
			  return 1;
			}
		  
			// names must be equal
			return 0;
		}))
	}

	return (
		<div className="App">
			<Nav />
			<button onClick={handleFilerClick}>Show {showAllHogs ? "Greased" : "All"} Hogs</button>
			<button onClick={handleSortClick}>Sort By {sortByName ? "Weight" : "Name"}</button>
			<br/>
			<br/>
			<br/>
			<ul className="ui grid container">
				{hogsToDisplay.map(hog => <Hog key={hog.name} hog={hog}/>)}
			</ul>
		</div>
	);
}

export default App;
