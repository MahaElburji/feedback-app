import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./component/Header";

import { FeedbackProvider } from "./context/FeedbackContext";

import AboutIconLink from "./component/AboutIconLink";
import FeedbackForm from "./component/FeedbackForm";
import FeedbackStates from "./component/FeedbackStates";
import FeedbackList from "./component/FeedbackList";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStates />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
