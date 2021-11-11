import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';


function App() {
  return (
      <div className='card'>
        <ServiceAdd />
        <ServiceList/>
      </div>  
  );
}

export default App;