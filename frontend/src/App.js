import Heading from "./components/Heading";
import MyTable from "./components/Table";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="container">

    <BrowserRouter>
        <Routes>
        <Route path='/' element={<><Heading /> <MyTable /></> } />
        <Route path='updateUser/:id' element={<><UpdateUser /></>} />
        <Route path='*' element={<><Heading /> <MyTable /></> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
