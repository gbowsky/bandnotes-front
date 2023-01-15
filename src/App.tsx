import React from 'react';
import {AppRoot, PanelHeader, SplitCol, SplitLayout, View} from "@vkontakte/vkui";
import {IndexPage} from "./pages/IndexPage";

function App() {
  return (
    <AppRoot>
      <SplitLayout
        header={<PanelHeader separator={false} />}
        style={{ justifyContent: 'center' }}
      >
        <SplitCol maxWidth={768}>
          <View activePanel="index">
            <IndexPage id="index" />
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
