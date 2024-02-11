import logo from './logo.svg';
import './App.css';
import CCBtnDiv from './ClassComps/CCBtnDiv';
import CCPsyc from './ClassComps/CCPsyc';
import CCTable from './ClassComps/CCTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CCBtnDiv />
        <CCPsyc />
        <CCTable />
      </header>
    </div>
  );
}

export default App;
