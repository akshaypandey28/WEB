import './App.css';
import data from './data'
import Tours from './components/tours';
const App = ()=> {

  const [tours,setTours] =useState(data)


  return (
    <div>
      
      <Tours tours={tours}></Tours>
    </div>
  )
};

export default App;
