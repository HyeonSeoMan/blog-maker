import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Kiosk from '../components/Kiosk';
import Content from '../components/Content';
import ContentView from '../components/ContentView';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`;
const LeftWrap = styled.div`
  flex: 1;
  padding: 10px;
`;
const RightWrap = styled.div`
  flex: 1;
  padding: 10px;
  border-left: 2px solid grey;
`;

export default function Creater() {
  const [state, setState] = useState([]);
  const [items, setItems] = useState([ {id: uuid(), content: 'Title'}, {id: uuid(), content: 'Context'}, {id: uuid(), content: 'Image'}, {id: uuid(), content: 'Headline'}, {id: uuid(), content: 'Point List'}, {id: uuid(), content: 'Ordered List'} ]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    
    result.splice(endIndex, 0, removed);

    return result;
  };
  const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];
    let reData = {}
    if (item.content === 'Point List' || item.content === 'Ordered List') {
      reData = { ...item, id: uuid(), data: ['', ''] }
    } else {
      reData = { ...item, id: uuid() }
    }
    destClone.splice(droppableDestination.index, 0, reData);

    return destClone;
  };
  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === 'CONTENT') setState(reorder(state, source.index, destination.index));
    if (source.droppableId === 'ITEMS') setState(copy(items, state, source, destination));

  };

  const setContentData = (id, data) => {
    let copy = [...state];
    copy = copy.map(e => {
      if (e.id === id) {
        const reData = {
          ...e,
          data: data
        }
        return reData
      } else {
        return e
      }
    })
    setState(copy);
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrap>
        <LeftWrap>
          <Kiosk items={items}/>
          <Content state={state} setContentData={(id, data) => setContentData(id, data)}/>
        </LeftWrap>
        <RightWrap>
          <ContentView state={state} />
        </RightWrap>
      </Wrap>
    </DragDropContext>
  );
}