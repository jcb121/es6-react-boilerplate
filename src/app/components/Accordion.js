import React from 'react';
import Section from './Accordion/Section';

export default class Accordion extends React.Component {
	render(){
		let data = this.props.sections;
		let sections = [];
		data.forEach(function(section){
			sections.push(<Section key={section.title} title={section.title} content={section.content} />);
		}.bind(this))
		
		return (
			<div className="accordian">{sections}</div>
		);
	}
}