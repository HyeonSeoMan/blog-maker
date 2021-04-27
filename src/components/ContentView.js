import React from "react";
import styled from 'styled-components';
import CVItemsWrap from './CVItemsWrap';

const Container = styled.div`
  padding: 6px 4px;
  border: 2px solid grey;
  border-radius: 4px;
  min-height: 80vh;
`;

export default function ContentView(props) {
  return (
    <Container>
      {props.state.map(e => {
        return (
          <CVItemsWrap key={'CVItemsWrap' + e.id} state={e}/>
        )
      })}
    </Container>
  );
}