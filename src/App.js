import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import IntroLoader from "./components/IntroLoader";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              <Route path="/" component={IntroLoader} exact />
              <Route path="/all" component={Trending} />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
            </Switch>
          </AnimatePresence>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
