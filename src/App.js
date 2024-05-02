import logo from './logo.svg';
import './App.css';
import myImage from './components/img/vp.png';
import HomePage from './components/Homepage';
import EmployeePage from './components/EmployeePage';

export let allEmployees = [
  {
    name: 'James King',
    position: "President and CEO",
    image: myImage,
  },
  {
    name: "Julie Taylor",
    position: "VP of Marketing",
    image: myImage,
  },
  {
    name: "Eugene Lee",
    position: "CFO",
    image: myImage,
  },
  {
    name: "John Williams",
    position: "VP of Engineering",
    image: myImage,
  },
  {
    name: "Ray Moore",
    position: "VP of Sales",
    image: myImage,
  },
  {
    name: "Paul Jones",
    position: "QA Manager",
    image: myImage,
  },
]
function App() {
  const topics = ['Employee Directory', 'Employee']
  //Employee Data
  
  return (
    <div className="App">
      <HomePage title = {topics[0]} workers={allEmployees}/>
      <EmployeePage workers={allEmployees} />
    </div>
  );
}

export default App;
