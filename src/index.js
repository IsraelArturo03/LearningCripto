import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Choise from "./routes/Choise";
import Avalanche from "./routes/crip/Avalanche";
import Binance from "./routes/crip/Binance";
import Bitcoin from "./routes/crip/Bitcoin";
import Etherum from "./routes/crip/Etherum";
import Polygon from "./routes/crip/Polygon";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Choise" element={<Choise />} />
      <Route path="Avalanche" element={<Avalanche />} />
      <Route path="Etherum" element={<Etherum/>}></Route>
      <Route path="Binance" element={<Binance/>}></Route>
      <Route path="Bitcoin" element={<Bitcoin/>}></Route>
      <Route path="Polygon" element={<Polygon/>}></Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);