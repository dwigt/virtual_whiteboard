import React from 'react'

import { StyledFilterButtons, StyledFilterButton } from './StyledFilterButtons';
export default function MessageFilter(props) {

  const filters = ['all', 'business', 'casual']
    return (
      <React.Fragment>
        <StyledFilterButtons>
        <h4>Filter messages</h4>
        {filters.map(filter => {
          return (
          <StyledFilterButton>
            <div onClick={() => props.setfilterType(filter)}>{filter}</div>
          </StyledFilterButton>
          )
        })}
        </StyledFilterButtons>
      </React.Fragment>
    );
}