import React, { Component } from 'react';

import SecondPageComponent from '../components/SecondPageComponent/SecondPageComponent';

class SecondPage extends Component {
	render () {
		return (
			<div>
				<h1>Second Page</h1>
				<p>Second Page is pretty awesome, too. Right?</p>

				<SecondPageComponent />
			</div>
		);
	}
}

export default SecondPage;