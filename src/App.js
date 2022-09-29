import NavBar from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import User from "./pages/User";

function App() {
  return (
    <>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <NavBar />
            <main className="container px-2 mx-auto pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/:login" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </>
  );
}

export default App;
