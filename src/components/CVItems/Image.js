import React from "react";
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
`;
const NoData = styled.div`
  border: 2px dashed grey;
  padding: 4px;
  min-height: 60px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  color: grey;
`;
export default function ImageComp(props) {
  return (
    <>
      {props.state.data && (
        <Image src={props.state.data['imagePreviewUrl']} />
      )}
      {!props.state.data && (
        <NoData>등록 된 이미지가 없습니다.</NoData>
      )}
    </>
  );
}