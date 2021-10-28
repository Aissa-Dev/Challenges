import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <p className="text-blue-500">Test</p>
      <Pdiv>
        <p>styled compo</p>
      </Pdiv>
    </div>
  );
}

export default App;

const Pdiv = styled.div`
  border: 2px solid red;
`;
