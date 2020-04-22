import React from "react";
import NodeElement from "./NodeElement";
import _ from "lodash";

const renderNode = (
  node,
  type,
  onToggle,
  level,
  folderPropName,
  filePropName,
  onNodeSelection
) => (
  <TreeNode
    key={node.id}
    node={node}
    type={type}
    level={level}
    onToggle={onToggle}
    folderPropName={folderPropName}
    filePropName={filePropName}
    onNodeSelection={onNodeSelection}
  />
);

const renderChildElements = (
  node,
  folderPropName,
  filePropName,
  level,
  onToggle,
  onNodeSelection
) => {
  const isOpen = node.isOpen ? node.isOpen : false;
  level = level + 1;

  if (isOpen) {
    const folderElements = node[folderPropName].map((node) => {
      return renderNode(
        node,
        "folder",
        onToggle,
        level,
        folderPropName,
        filePropName,
        onNodeSelection
      );
    });
    const fileElements = node[filePropName].map((node) => {
      return renderNode(
        node,
        "file",
        onToggle,
        level,
        folderPropName,
        filePropName,
        onNodeSelection
      );
    });
    return _.concat(folderElements, fileElements);
  } else {
    return null;
  }
};

const TreeNode = (props) => {
  const {
    node,
    onToggle,
    folderPropName,
    filePropName,
    level = 0,
    onNodeSelection,
  } = props;
  return (
    <div>
      <NodeElement {...props} />
      {renderChildElements(
        node,
        folderPropName,
        filePropName,
        level,
        onToggle,
        onNodeSelection
      )}
    </div>
  );
};

export default TreeNode;
