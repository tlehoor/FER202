import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    age : 21,
    name : "Thành Lê",
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Hello World</p>
        <p>{person.age}, {person.name}</p>

        
      </header>
    </div>
  );
}

export default App;
