import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todos from "./pages/Todos";
import DefaultTemplate from "./templates/DefaultTemplate";

function App() {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<Todos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </DefaultTemplate>
  );
}

export default App;
