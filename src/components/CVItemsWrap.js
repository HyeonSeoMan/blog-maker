import React from "react";
import styled from 'styled-components';
import {Title, Context, Image, Headline, PointList, OrderedList} from './CVItems';

const Container = styled.div`
  padding: 6px 4px;
`;

export default function ContentViewItem(props) {
  const renderComponent = () => {
    const content = props.state.content;
    switch (content) {
      case 'Title':
        return <Title state={props.state}/>
      case 'Context':
        return <Context state={props.state}/>
      case 'Image':
        return <Image state={props.state}/>
      case 'Headline':
        return <Headline state={props.state}/>
      case 'Point List':
        return <PointList state={props.state}/>
      default:
        return <OrderedList state={props.state}/>
    }
  }
  return (
    <Container>
      {renderComponent()}
    </Container>
  );
}