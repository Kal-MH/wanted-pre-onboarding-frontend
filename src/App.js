import { Route, Routes } from "react-router-dom";
import DefaultTemplate from "./templates/DefaultTemplate";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

function App() {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </DefaultTemplate>
  );
}

export default App;
