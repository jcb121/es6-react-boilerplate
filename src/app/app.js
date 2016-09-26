/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion';
import {data} from './data';

// Filterable CheatSheet Component
ReactDOM.render( <div><Accordion sections={data}/></div>, document.getElementById('searchableTable') );