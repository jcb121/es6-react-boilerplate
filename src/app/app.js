/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SearchableTable from './components/SearchableTable';
import {data} from './data';

// Filterable CheatSheet Component
ReactDOM.render( <div><SearchableTable data={data}/></div>, document.getElementById('searchableTable') );