import React, { Component } from "react";
import _ from "lodash";
import TreeNode from "./TreeNode";

class Tree extends Component {
  constructor(props) {
    super(props);
    const data = _.cloneDeep(props.data);
    this.state = { data: data };
  }

  getChangedObject = (parent, id) => {
    if (parent.id === id) {
      let isOpen = parent.isOpen;
      if (isOpen === undefined) {
        return { ...parent, isOpen: true };
      } else {
        return { ...parent, isOpen: !isOpen };
      }
    }

    for (let i = 0; i < parent.childNodes.length; i++) {
      let temp = this.getChangedObject(parent.childNodes[i], id);
      if (temp !== parent.childNodes[i]) {
        let changedData = {
          ...parent,
          childNodes: Object.assign([], parent.childNodes, { [i]: temp }),
        };
        return changedData;
      }
    }
    return parent;
  };

  onToggle = (node) => {
    this.setState((state) => {
      const changedData = this.getChangedObject(state.data, node.id);
      return { data: changedData };
    });
  };

  render() {
    return (
      <TreeNode
        node={this.state.data}
        level={0}
        type="folder"
        onToggle={this.onToggle}
        folderPropName = {this.props.folderPropName}
        filePropName = {this.props.filePropName}
        onNodeSelection = {this.props.onNodeSelection}
      />
    );
  }
}

export default Tree;
