import React, { useDrag } from 'react-dnd';
import Window from '../window';

/**
 * Your Component
 */
export default function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: Window, text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
}
