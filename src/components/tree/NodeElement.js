import React from "react";
import styled from "styled-components";
import ExpandCollapseIcon from "./ExpandCollapseIcon";
import FileFolderIcon from "./FileFolderIcon";

const NodeElement = (props) => {
  const { node, type, level } = props;
  const isOpen = node.isOpen ? node.isOpen : false;
  return (
    <StyledTreeNode level={level} type={type}>
      <ExpandCollapseIcon {...props} />
      <FileFolderIcon type={type} isOpen={isOpen} />
      <div className='node-text' onClick = {() => props.onNodeSelection(node)}  >{node.name}</div>
    </StyledTreeNode>
  );
};

const calculatePaddingLeft = (level) =>
  level * 20 ;;

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${(props) => calculatePaddingLeft(props.level)}px;
  &:hover {
    background-color: lightgray;
  }

  .node-text {
    flex-grow:1;
  }
`;

export default NodeElement;
