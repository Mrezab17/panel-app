import Content from "./components/Content";

import { Provider } from "react-redux";
import store from "./store/store";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content />
      </PersistGate>
    </Provider>
  );
}

export default App;
