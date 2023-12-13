import './App.css';
import SideBar from "./Components/SideBar"
import UserForm from './Pages/UserForm';
import UserTable from './Pages/UserTable';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
<>
<div className='row'>
<div className='col-md-2'>
<SideBar />
</div>
<div className="col-md-10">
 <Routes>
 <Route path="/" element={<UserForm />} />
 <Route path="/usertable" element={<UserTable />} />
 </Routes>
 </div>
</div>
 </>
  );
}

export default App;
