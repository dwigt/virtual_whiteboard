import React from 'react'
import {
  StyledMessage,
  StyledAvatar,
  StyledName,
  StyledMeta,
  StyledMessageText,
} from "./StyledMessage";

function Message(props) {
    return (
      <React.Fragment>
        <StyledMessage>
          <StyledMeta>
            <StyledAvatar>
              <img alt="avatar" src={props.message.avatar}></img>
            </StyledAvatar>
            <StyledName>{props.message.name}</StyledName>
          </StyledMeta>
          <StyledMessageText>
            <div>{props.message.message}</div>
          </StyledMessageText>
        </StyledMessage>
      </React.Fragment>
    );
}

export default Message
