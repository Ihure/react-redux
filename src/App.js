import logo from "./logo.svg";
import "./App.css";

import ViewCurrency from "./components/ViewCurrency";
import SWRViewCurrency from "./components/SwrViewCurrency";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<ViewCurrency />*/}
        <SWRViewCurrency />
      </header>
    </div>
  );
}

export default App;
