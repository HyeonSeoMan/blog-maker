import React from "react";
import ContentViewItem from './ContentViewItem';

export default function ContentView(props) {
  return (
    <div>
      {props.state.map(e => {
        return (
          <ContentViewItem key={'ContentViewItem' + e.id} state={e}/>
        )
      })}
    </div>
  );
}