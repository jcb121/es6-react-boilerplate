import React from 'react';

export default class Section extends React.Component {
	render(){
		return(
			<div>
				<p>{this.props.data.name} = {this.props.data.price} </p>
			</div>
		);
	}
}