import React from 'react';

import styled from "styled-components";
import {
  FaFile,
  FaFolder,
  FaFolderOpen,
} from "react-icons/fa";


const StyledNodeIcon = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;

const FileFolderIcon = ({type, isOpen}) => (
    <StyledNodeIcon>
      {type === "file" ? <FaFile color={'DarkCyan'} /> : isOpen ? <FaFolderOpen color={'DimGray'} /> : <FaFolder color={'darkslategray'} />}
    </StyledNodeIcon>
  );

  export default FileFolderIcon;