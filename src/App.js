import './App.css';
import Tables from "./components/Tables";
import Navigation from "./components/Navigation";
import TablesProvider from "./providers/TablesProvider";

function App() {
  return (
    <div className="App">
      <TablesProvider initialState={{name: "U Poníka", tables: [[1,2],[3,4],[5]]}}>
        <Navigation />
        <Tables />
      </TablesProvider>
    </div>
  );
}

export default App;
