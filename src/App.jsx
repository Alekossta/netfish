import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/Layout";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;