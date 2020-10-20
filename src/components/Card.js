import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='bg-light-green dib br3 pa2 ma3 grow bw2 shadow-5 tc'> 
		 {/*	Documentation: https://tachyons.io/docs/
		 	bg-light-green 	(changes background color of that div)
		 	dib 			(display: inline-block)
			br3				(border-radius)
			pa3				(padding)
			ma2				(margin)
			grow			(It is an animation :hover)
			bw2				(border width) Reference: https://tachyons.io/docs/themes/borders/
			shadow-5		(Adding shadow) Reference: https://tachyons.io/docs/themes/box-shadow/
			tc 				(text center)
		 */}
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;