import Main from './Main';
import {BrowserRouter} from 'react-router-dom';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };
  
  return (
    <>
    <Provider template={AlertTemplate} {...options}>
      <BrowserRouter>
      <Main />
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
