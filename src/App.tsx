import { Route, Routes } from "react-router-dom";

import PageRouter from "./routes/PageRouter";
import DefaultTemplate from "./templates/DefaultTemplate";

function App() {
  return (
    <DefaultTemplate>
      <PageRouter />
    </DefaultTemplate>
  );
}

export default App;
