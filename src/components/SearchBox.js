import React from 'react';

const SearchBox = ({searchChangeEvent}) => {
	return (
		<div className="pa2">
			<input 
				className=" pa3 ba b--green bg-lightest-blue br3" 
				/*
					pa3					(padding on all sides)
					ba b--green 		(all sided border of color green)
					bg-lightest-blue	(background color)	
					br3					(rounded border)
				*/
				type='search' 
				placeholder='Search Robots' 
				onChange = {searchChangeEvent} 			/*onChange eventListner calls searchChangeEvent*/
			/>	
		</div>
	);
}

export default SearchBox;