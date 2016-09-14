/*
*	Searchable Table
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';

import SearchBar from './SearchBar';
import Table from './table';



export default class SearchableTable extends React.Component {
	constructor() {
		super();
		// Initial state of the component
        this.state = {filterText: ''}
    }
    handleUserInput(filterText) {
    	// When there's a change in the state, the component and all its 
    	// sub-components get updated.
        this.setState({filterText: filterText});
    }
	render(){
		return (
			<div>
				<SearchBar 
					filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)}
                />
				<Table 
					data={this.props.data} 
					filterText={this.state.filterText}
				/>
			</div>
		);
	}
}
