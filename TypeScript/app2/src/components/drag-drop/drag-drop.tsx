import { FC } from 'react';
import { StyledDragDrop } from './drag-drop.styled';

interface DragDropProps {
  name?: string;
}

const DragDrop: FC<DragDropProps> = ({ name }) => {
  return (
    <StyledDragDrop>
      <h2 className="header">React Drag File Input</h2>
    </StyledDragDrop>
  );
};

export default DragDrop;
