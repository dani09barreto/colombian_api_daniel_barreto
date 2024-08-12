import { Route, Routes } from "react-router-dom";
import Layout from "./routes/layout";
import Prueba from "./routes/test";
import Home from "./routes/home";
import Default from "./routes/default";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="colombia-dash" element={<Prueba/>} />
          <Route path="*" element={<Default/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;