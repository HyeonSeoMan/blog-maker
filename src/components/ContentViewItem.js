import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  padding: 6px 4px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
const Context = styled.pre`
  width: 100%;
  font-size: 13px;
  font-weight: 500;
  color: grey;
`;
const Image = styled.img`
  max-width: 100%;
`;
const Headline = styled.hr`
  border: 1px solid grey;
`;

export default function ContentViewItem(props) {
  return (
    <Container>
      {props.state.content === 'Title' && (
        <Title>{props.state.data}</Title>
      )}
      {props.state.content === 'Context' && (
        <Context>{props.state.data}</Context>
      )}
      {(props.state.content === 'Image' && props.state.data) && (
        <Image src={props.state.data['imagePreviewUrl']} />
      )}
      {props.state.content === 'Headline' && (
        <Headline/>
      )}
      {props.state.content === 'Point List' && (
        <ul>
          {props.state.data.map((e, idx) => {
            return (
              <li key={'li' + idx}>{e}</li>
            )
          })}
        </ul>
      )}
      {props.state.content === 'Ordered List' && (
        <ol>
          {props.state.data.map((e, idx) => {
            return (
              <li key={'li' + idx}>{e}</li>
            )
          })}
        </ol>
      )}
    </Container>
  );
}