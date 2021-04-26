import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from 'styled-components';
import ContentItem from './ContentItem';

const Content = styled.div`
`;

const List = styled.div`
  border: 1px ${props => (props.isDraggingOver ? 'dashed #000' : 'solid #ddd')};
  background: #fff;
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
  flex: 0 0 150px;
  font-family: sans-serif;
`;

const Container = styled(List)`
  margin: 0.5rem 0.5rem 1.5rem;
  min-height: 100px;
  background: #ccc;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`;

export default function ContentComp(props) {
  return (
    <Content>
      <Droppable droppableId={'CONTENT'}>
        {(provided, snapshot) => (
          <Container ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
            {props.state.length
              ? props.state.map(
                (item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) =>
                      <ContentItem
                        provided={provided}
                        snapshot={snapshot}
                        item={item}
                        setContentData={(id, data) => props.setContentData(id, data)}
                      />
                    }
                  </Draggable>))
              : provided.placeholder && <Notice>Drop items here</Notice>}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </Content>
  );
}