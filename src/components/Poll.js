import React from 'react';
import Radio from '@material-ui/core/Radio';


//other imports

class Poll extends React.Component {

	//other member functions and variables can go here

	render() {
		//JS code goes here
		// but not all of your code
		//const classes = useStyles();
		//const  = (event) => event.();







		return (
			//JSX HTML goes here
			<>


				<p>Who is your FAVORITE Bank President?</p>


				<div>
					<Radio value="a"
						name="radio-button-demo"
						onChange=""
						inputProps={{ 'aria-label': 'A' }}
					/> Yau Ho
      				<Radio value="b"
						name="radio-button-demo"
						onChange=""
						inputProps={{ 'aria-label': 'B' }}
					/>Henji
      				<Radio value="d"
						name="radio-button-demo"
						onChange=""
						inputProps={{ 'aria-label': 'D' }}
					/>Deon
      				<Radio value="e"
						name="radio-button-demo"
						onChange=""
						inputProps={{ 'aria-label': 'E' }}
					/> Kris
    			</div>
		</>
		)
	}

}

export default Poll
