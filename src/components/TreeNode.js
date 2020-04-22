import React from "react";
import styled from "styled-components";
import {
  FaFile,
  FaFolder,
  FaFolderOpen,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const expandCollapseIcon = (node,type,onToggle,isOpen) => (
  <StyledNodeIcon onClick={() => onToggle(node)}>
    {type === "folder" && node.childNodes.length > 0 ? (
      isOpen ? (
        <FaChevronDown />
      ) : (
        <FaChevronRight />
      )
    ) : null}
  </StyledNodeIcon>
);

const nodeIcon = (type, isOpen) => (
  <StyledNodeIcon marginRight={10}>
    {type === "file" ? <FaFile /> : isOpen ? <FaFolderOpen /> : <FaFolder />}
  </StyledNodeIcon>
);

export const TreeNode = (props) => {
  const { node, type, onToggle,isOpen,level } = props;


  return (
    <div>
      <StyledTreeNode level={level} type={type}>
        {expandCollapseIcon(node,type,onToggle,isOpen)}
        {nodeIcon(type,isOpen)}
        <span role="button">{node.name}</span>
      </StyledTreeNode>

      {isOpen

        ? node.childNodes.map((childNode, index) => {
           
            return (
              <TreeNode
                key={childNode.id}
                node={childNode}
                type="folder"
                level={level + 1}
                onToggle={onToggle}
                isOpen = {childNode.isOpen?childNode.isOpen:false}
              />
            );
          })
        : null}
    </div>
  );
};

const calculatePaddingLeft = (level, type) =>
  level * 20 + (type === "folder" ? 0 : 20);

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${(props) => calculatePaddingLeft(props.level, props.type)}px;
  &:hover {
    background-color: lightgray;
  }
`;

const StyledNodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 5)}px;
`;
