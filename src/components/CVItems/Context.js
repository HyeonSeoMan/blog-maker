import React from "react";
import styled from 'styled-components';

const Context = styled.pre`
  width: 100%;
  font-size: 13px;
  font-weight: 500;
  color: grey;
`;
const NoData = styled.div`
  border: 2px dashed grey;
  padding: 4px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  color: grey;
`;
export default function ContextComp(props) {
  return (
    <>
      {props.state.data && (
        <Context>{props.state.data}</Context>
      )}
      {!props.state.data && (
        <NoData>내용을 입력해주세요.</NoData>
      )}
    </>
  );
}