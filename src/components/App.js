import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "../routes/Home";
import { AboutMovie } from '../routes/Details';



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<AboutMovie />} />
      </Routes>
    </BrowserRouter>
  );
};


