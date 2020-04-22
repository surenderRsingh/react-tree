import React from 'react';
import {TreeNode} from './TreeNode';
import Tree from './tree';

const data = {
  id: 1,
  name: "root",
  childNodes: [
    {
      id: 2,
      name: "ui",
      childNodes: [
        {
          id: 3,
          name: "web",
          childNodes: [],
          childComponentsDetails: [{
              id:101,
              name:"component31"
          }],
        },
      ],
      childComponentsDetails: [{
        id:102,
        name:"component21"
      }],
    },
    {
      id: 4,
      name: "integration",
      childNodes: [],
      childComponentsDetails: [],
    },
    {
      id: 5,
      name: "api",
      childNodes: [],
      childComponentsDetails: [],
    },
  ],
  childComponentsDetails: [],
};

export class Container extends React.Component{

    onNodeSelection = (node) => {
        console.log(`node selected --- ${node.id}`)
    }
    

    render() {


        return (
          <React.Fragment>
            <Tree
              data={data}
              folderPropName="childNodes"
              filePropName="childComponentsDetails"
              onNodeSelection = {this.onNodeSelection}
            />
          </React.Fragment>
        );
    }
}























//  