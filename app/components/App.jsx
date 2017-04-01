import React, {Component, PropTypes} from 'react';
import Menu from './Menu.js';
import menuData from '../store/menuData.js';
import Tree from './Tree.jsx';
import SortableTree from 'react-sortable-tree';

export default class App extends React.Component {
	render() { 
		return (	
					<div>
						<div className = "diagram">
							<Tree/>
						</div>
						<div className = "menoo">
							<Menu menuData={menuData} />
						</div>
					</div>
			   );
	}
}