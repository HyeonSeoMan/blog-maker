import React from "react";
import styled from 'styled-components';

const Headline = styled.hr`
  border: 1px solid grey;
`;

export default function HeadlineComp(props) {
  return (
    <Headline/>
  );
}