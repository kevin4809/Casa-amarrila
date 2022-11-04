import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thankyoupage" element={<ThankYouPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
