import React, { useState } from "react";

const Hog = function({ hog }) {

    const [showDetails, setShowDetails] = useState(true)

    const hogDetails = function() {
        return (
            <>
                <p>Specialty: {hog.specialty}</p>
                <p>weight: {hog.weight}</p>
                <p>Greased: {String(hog.greased)}</p>
                <p>Medal: {hog.['highest medal achieved']}</p>
            </>
        )
    }

    const handleClick = function(event) {
        setShowDetails(!showDetails)
    }

	return (
		<li className="ui eight wide column" style={{borderStyle: 'solid'}} onClick={handleClick}>
			<h3>{hog.name}</h3>
            <img src={hog.image} style={{objectFit: 'contain', width: '200px'}} alt={hog.name}></img>
            {showDetails ? hogDetails() : null}
		</li>
	);
};

export default Hog;
