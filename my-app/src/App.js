import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProprs from './components/FunctionalGreetingWithProps';


function App() {
  return (
    <div className="App">
    <FunctionalGreeting/>
    <FunctionalGreetingWithProprs/>
    </div>
  );
}



export default App;
