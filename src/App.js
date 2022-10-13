import { Routes, Route } from "react-router-dom";

import Layout from "./routes/layout/Layout";
import Home from "./routes/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
