// export default function app(){

import Exemplo from "./components/Exemplo";

//   return(
//     <h1>Hello world!</h1>
//   )
// }
// return(
  // <div>
  // <h1>Hello world</h1>
  // <h2>Data: {new Date().toLocaleDateString()}</h2>
  // <h2>Data: {new Date().toLocaleTimeString()}</h2>
  // </div>
  const App = () => {
    
  const elementosHtml = (
    <div>
      <h1>Hello world</h1>
      <h2>Data: {new Date().toLocaleDateString()}</h2>
      <h2>Data: {new Date().toLocaleTimeString()}</h2>
      {/* <Exemplo/> */}
    </div>
  );
  return elementosHtml;
};

export default App;
