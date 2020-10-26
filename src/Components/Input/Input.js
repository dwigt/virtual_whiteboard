import React, { useState } from "react";
import { StyledInput, StyledSelect } from "./StyledInput";
import Grid from "styled-components-grid";

function NewPost(props) {
  const [message, setMessage] = useState();
  const [type, setType] = useState("serious");
  return (
    <Grid>
      <StyledInput>
        <h4>What would you like to say?</h4>
        <label>Message</label>
        <input
          type="text"
          value={message}
          maxLength="280"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => props.postItem({ message: message, type: type })}
        >
          Submit
        </button>
        <StyledSelect>
          <label>Filter Message Types</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="business">Business</option>
            <option value="casual">Casual</option>
          </select>
        </StyledSelect>
      </StyledInput>
    </Grid>
  );
}

export default NewPost;
