import React from "react";
import styled from 'styled-components';

export default function OrderedListComp(props) {
  return (
    <ol>
      {props.state.data.map((e, idx) => {
        return (
          <li key={'li' + idx}>{e ? e : '내용을 입력해주세요.'}</li>
        )
      })}
    </ol>
  );
}