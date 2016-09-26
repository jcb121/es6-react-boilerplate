import React from 'react';

export default class Section extends React.Component {
	constructor(){
		super();
		this.state = {collapsed: true};
	}
	clickHandler(){
		this.setState({collapsed: !this.state.collapsed});
	}
	getClasses(){
		return 'section ' + ((this.state.collapsed)? 'collapsed':'expanded');
	}
	render(){
		return(
			<div className={this.getClasses()}>
				
				
				<div className="content">
					<div className="shadow"></div>

					<h2 className="header">{this.props.title}</h2>
					<p className="text"> {this.props.content}</p>
				</div>
				
				<div className="hover" onClick={this.clickHandler.bind(this)}>
					<p>Click to read more</p>
				</div>
				
				
			</div>
		);
	}
}