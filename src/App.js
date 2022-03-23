import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  return (
    <div className="App">
      <AddEmployee employees={employees} setEmployees={setEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
