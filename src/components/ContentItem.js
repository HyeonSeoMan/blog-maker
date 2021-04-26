import React, { useState } from "react";
import styled from 'styled-components';

const Item = styled.div`
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
`;

const HandleWrap = styled.div`
  display: flex;
  font-size: 12px;
`;

const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  padding: 0.7rem;
  line-height: 1.5;
  background: #fff;
  color: #000;
`;

const ListItemWrap = styled.div`
  display: flex;
  margin-left: 20px;
`;

export default function ContentItem(props) {
  const [reData, setReData] = useState(['', '']);

  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      sendReData({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }
  const addLItem = () => {
    let copy = reData.concat('');
    sendReData(copy);
  }
  const editLItem = (value, idx) => {
    let copy = [...reData];
    copy[idx] = value
    sendReData(copy);
  }
  const removeLItem = (idx) => {
    let copy = [...reData];
    copy.splice(idx, 1)
    sendReData(copy);
  }
  const sendReData = (copy) => {
    props.setContentData(props.item.id, copy);
    setReData(copy);
  }

  return (
    <Item
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      isDragging={props.snapshot.isDragging}
      style={props.provided.draggableProps.style}
    >
      <HandleWrap>
        <Handle {...props.provided.dragHandleProps}>
          <svg width="12" height="12" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"/>
          </svg>
        </Handle>
        {props.item.content}
      </HandleWrap>
      {props.item.content === 'Title' && (
        <input onChange={(e) => sendReData(e.target.value)} />
      )}
      {props.item.content === 'Context' && (
        <textarea onChange={(e) => sendReData(e.target.value)} />
      )}
      {props.item.content === 'Headline' && (
        <hr/>
      )}
      {props.item.content === 'Image' && (
        <input type="file" onChange={(e) => handleImageChange(e)} />
      )}
      {props.item.content === 'Point List' && (
        <div>
          {reData.map((data, idx) => {
            return (
              <ListItemWrap key={props.item.id + 'pItem' + idx}>
                <div>·</div>
                <input value={reData[idx]} onChange={(e) => editLItem(e.target.value, idx)}/>
                <button onClick={() => removeLItem(idx)}>x</button>
              </ListItemWrap>
            )
          })}
          <button onClick={() => addLItem()}>add</button>
        </div>
      )}
      {props.item.content === 'Ordered List' && (
        <div>
          {reData.map((data, idx) => {
            return (
              <ListItemWrap key={props.item.id + 'oItem' + idx}>
                <div>{idx + 1}</div>
                <input value={reData[idx]} onChange={(e) => editLItem(e.target.value, idx)}/>
                <button onClick={() => removeLItem(idx)}>x</button>
              </ListItemWrap>
            )
          })}
          <button onClick={() => addLItem()}>add</button>
        </div>
      )}
    </Item>
  );
}