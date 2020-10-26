import React from "react";
import StyledMessageList from "./StyledMessageList";
import Message from "Components/Message/Message";
function MessageList(props) {

  if (props.loading) {
    return <p>loading..</p>;
  }

  if (props.error) {
    return <p>ERROR</p>;
  }

  const filteredMessages = props.messageList.filter(x => x.type === props.filterType);
  
  return (
    <React.Fragment>
      <StyledMessageList>
        {props.messageList && props.filterType === 'all' ?
          props.messageList.map((message, i) => {
            return <Message key={i} message={message} />;
          })
          :
          filteredMessages.map((message, i) => {
            return <Message key={i} message={message} />;
          })}
      </StyledMessageList>
    </React.Fragment>
  );
}

export default MessageList;
