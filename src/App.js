import './App.css';

import HookUseState from "./HookUseState";
import HookUseEffect from "./HookUseEffect";
import HookUseContext from './HookUseContext';
import HookUseRef from "./HookUseRef";
import HookUseReducer from "./HookUseReducer";
import HookUseMemo from './HookUseMemo';
import HookUseCallback from './HookUseCallback';

function App() {

  return (
    <div className="App">
      <HookUseState/>
      <HookUseEffect/>
      <HookUseContext/>
      <HookUseRef/>
      <HookUseReducer/>
      <HookUseMemo/>
      <HookUseCallback/>
    </div>
  );
}

export default App;
