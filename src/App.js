import React, {useState} from "react";
import Grid from "styled-components-grid";
// eslint-disable-next-line
import useAxios, { refetch } from "axios-hooks";
// eslint-disable-next-line
import { delete as del, post, put } from "axios";

import MessageList from "./Components/MessageList/MessageList";
import Input from "./Components/Input/Input";
import MessageFilter from "./Components/MessageFilter/MessageFilter"
import StyledPage from "./Components/Pages/Grid/StyledPageSection";
import StyledSidebar from "./Components/Sidebar/StyledSidebar";
import StyledTopBar from "./Components/TopBar/StyledTopBar";

function App() {

  const [filterType, setfilterType] = useState('all');

  const baseUrl = "https://5f64e1a4fb1b5700169c96d3.mockapi.io/api/v1/latest";
  
  const [{ data, loading, error }, refetch] = useAxios(
    baseUrl
  );


  async function postItem(item) {
    await post(baseUrl, item);
    await refetch(baseUrl);
  }

  return (
    <React.Fragment>
      <Grid halign="center">
        <Grid.Unit size={{ mobile: 12 / 12, desktop: 10 / 12 }}>
          <StyledTopBar>
            <Input postItem={postItem}></Input>
          </StyledTopBar>
        </Grid.Unit>
      </Grid>
      <Grid halign="center">
        <Grid.Unit size={{ mobile: 6 / 6, desktop: 2 / 12 }}>
          <StyledSidebar>
            <MessageFilter setfilterType={setfilterType}></MessageFilter>
          </StyledSidebar>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 6 / 6, desktop: 8 / 12 }}>
          <StyledPage>
            <MessageList
              filterType={filterType}
              messageList={data}
              loading={loading}
              error={error}
            />
          </StyledPage>
        </Grid.Unit>
      </Grid>
    </React.Fragment>
  );
}

export default App;
