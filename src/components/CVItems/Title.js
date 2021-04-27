import React from "react";
import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
const NoData = styled.div`
  border: 2px dashed grey;
  padding: 4px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
export default function TitleComp(props) {
  return (
    <>
      {props.state.data && (
        <Title>{props.state.data}</Title>
      )}
      {!props.state.data && (
        <NoData>타이틀을 입력해주세요.</NoData>
      )}
    </>
  );
}