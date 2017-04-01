import React, {Component} from 'react';

export default class Node extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			editing: false, 
			memberName: '0'
		};
	}
	render() {
			if(this.state.editing) {
				return this.renderEdit();
			}

			return this.renderMember(); 
			
	}
	renderEdit = () => {
		return <input type= "text"
			ref={
				(e) => e ? e.selectionStart = this.state.memberName.length : null
			}
			autoFocus={true}
			defaultValue={this.state.memberName}
			onBlur={this.finishEdit}
			onKeyPress={this.checkEnter} />
	}; 

	renderMember = () => {
		return <div onClick={this.edit}> port: {this.state.memberName} </div>
	};

	edit = () => {
		this.setState({
			editing: true
		});
	};

	checkEnter = (e) => {
		if(e.key === 'Enter') {
			this.finishEdit(e);
		}
	};

	finishEdit = (e) => {
		const value = e.target.value;
		const oldMemName = this.state.memberName;  
		this.setState({
			editing: false, 
			memberName: value
		});
	}
 

}