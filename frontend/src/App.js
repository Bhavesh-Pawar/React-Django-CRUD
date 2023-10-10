import Heading from "./components/Heading";
import MyTable from "./components/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";
import AddUser from "./components/AddUser";
import AddButton from "./components/AddButton";
function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Heading /> <AddButton />  <MyTable /></>} />
          <Route path='addUser/' element={<><AddUser /></>} />
          <Route path='updateUser/:id' element={<><UpdateUser /></>} />
          <Route path='*' element={<><Heading /> <MyTable /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
