import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import TodoPage from "../pages/TodoPage";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
