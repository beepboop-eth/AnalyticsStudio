import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import Node  from './Node.jsx';
export default class Tree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [
                { 
                    title: 'Zookeeper Server',
                    expanded: true, 
                    noChildren: true,
                    children: [ 
                        { 
                             title: (
                                    <div>
                                        <Node />
                                    </div>
                                    ), 

                            subtitle: 'Please enter port information:',
                            noChildren: true,
                            noDragging: true,
                        }
                        
                    ] 
                },
                {
                    title: 'Nimbus',
                    expanded: false,
                    children: [
                        {
                            title: 'seeds:'
                        },
                        {
                            title: 'threads:'
                        },
                        {
                            title: 'buffer_size:'
                        }
                    ]
                }
            ]
        };
    }

    render() {

        const newData = {
                    title: 'Nimbus',
                    expanded: false,
                    children: [
                        {
                            title: 'seeds:'
                        },
                        {
                            title: 'threads:'
                        },
                        {
                            title: 'buffer_size:'
                        }
                    ]
                };
        return (

            

            <div style={{ height: 600 }}>

                <button onClick={this.generateQuery}>Generate</button> 
                <button onClick={() => {
                    const treeDat = this.state.treeData
                    treeDat.push(newData);
                    this.setState({
                        treeData: treeDat
                    });
                }}>+</button>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                    canDrag={({ node }) => !node.noDragging}
                    canDrop={({ nextParent }) => !nextParent || !nextParent.noChildren}
                />
            </div>
        );
    }
    changeTreeData = () => {
        var treeDat = this.state.treeData; 
        const newData = {
                    title: 'Nimbus',
                    expanded: false,
                    children: [
                        {
                            title: 'seeds:'
                        },
                        {
                            title: 'threads:'
                        },
                        {
                            title: 'buffer_size:'
                        }
                    ]
                };
        treeDat.push(newData);
        this.setState({
            treeData: treeDat
        }, this.forceUpdate());

    }
    generateQuery = () => {
        const treeData = this.state.treeData; 
        window.alert(' Zookeper Server:\n  \t port: 0 \n Nimbus: \n \t seeds: \n \t threads: \n \t buffer_size');
    }
}