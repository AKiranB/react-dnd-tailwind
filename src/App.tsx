
import logo from './logo.svg';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import { reorderColors } from './reorder';
import { ColorMap } from './types';

function App() {
  const [colors, setColors] = useState<ColorMap>({
    a: ["blue", "pink"],
    b: ["red"],
    c: ["green"]
  });

  return (
    <DragDropContext onDragEnd={({ destination, source }) => {
      // // dropped outside the list
      if (!destination) {
        return;
      }
      setColors(
        reorderColors(
          colors,
          source,
          destination
        ),
      );
    }}>
      <div>
        {Object.entries(colors).map(([k, v]) => (
          null
          // <AuthorList
          //   internalScroll
          //   key={k}
          //   listId={k}
          //   listType="CARD"
          //   quotes={v}
          // />
        ))}
      </div>
    </DragDropContext>
  );
}

export default App;
