import "./App.css";
import { UseStateIndex } from "./1_useState";
import { UseEffectIndex } from "./2_useEffect";
import { ConditionalIndex } from "./3_conditionalRendering";
import { FormsIndex } from "./4_Forms";
import { UseRefIndex } from "./5_useRef_Custom_Hooks";
import { ContextIndex } from "./6_ContextAPI";


function App() {
  return (
    <>
      <UseStateIndex />
      <UseEffectIndex />
      <br />
      <ConditionalIndex />
      <br />
      <FormsIndex />
      <br />
      <UseRefIndex />
      <ContextIndex />
    </>
  );
}

export default App;
