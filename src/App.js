import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route path="/app/:title" element={<GamePage />}></Route>
        </Routes>
        <Routes>
          <Route path="/order" element={<OrderPage />}></Route>
        </Routes>
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
