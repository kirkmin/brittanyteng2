import React from 'react';

import classes from './SecondPageComponent.module.css';

const secondPageComponent = (prop) => (
	<div className={classes.SecondPageComponent}>
		This should be centered via CSS modules with hexed names and stuff.
	</div>
);

export default secondPageComponent;