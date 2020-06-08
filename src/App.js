import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  MosaicWithoutDragDropContext
} from 'react-mosaic-component';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MosaicWithoutDragDropContext />
    </DndProvider>
  );
}

export default App;
