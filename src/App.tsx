import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import ReserveOverview from "./pages/ReserveOverview";



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/reserve_overview/:slug" element={<ReserveOverview />} />
          <Route path="/*" element={<NotFound />} />
          {/* <Route index path="/" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
