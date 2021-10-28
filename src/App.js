import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";


import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
          {/* <div className="line-5"></div> */}
        </div>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfolioPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}


const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  /* background-color: red; */

  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    opacity: 0.2;
    z-index: -1;
    justify-content: space-evenly;
      .line-1, .line-2, .line-3, .line-4, .line-5 {
        width: 1px;
        min-height: 100vh;
        background-color: var(--bordar-color);
        z-index: -1;
      }
  }
`;

export default App;
