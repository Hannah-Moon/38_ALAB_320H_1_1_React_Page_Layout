import './App.css';
import myImage from './components/assets/empPic.png';
import HomePage from './components/Homepage';
import EmployeePage from './components/EmployeePage';

export let allEmployees = [
  {
    name: 'James King',
    position: 'President and CEO',
    image: myImage,
    phone: '123-456-789'
  },
  {
    name: 'Julie Taylor',
    position: 'VP of Marketing',
    image: myImage,
    phone: '123-456-789'
  },
  {
    name: 'Eugene Lee',
    position: 'CFO',
    image: myImage,
    phone: '123-456-789'
  },
  {
    name: 'John Williams',
    position: 'VP of Engineering',
    image: myImage,
    phone: '123-456-789'
  },
  {
    name: 'Ray Moore',
    position: 'VP of Sales',
    image: myImage,
    phone: '123-456-789'
  },
  {
    name: 'Paul Jones',
    position: 'QA Manager',
    image: myImage,
    phone: '123-456-789'
  },
]
function App() {
  const topics = ['Employee Directory', 'Employee']
  //Employee Data
  
  return (
    <div className="App">
      <HomePage title = {topics[0]} workers={allEmployees}/>
      <EmployeePage title = {topics[1]}  workers={allEmployees} />
    </div>
  );
}

export default App;
