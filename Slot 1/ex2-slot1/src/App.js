import logo from './logo.svg';
import './App.css';

function App() {
  const people = [
    {name : "Thành", age : 21},
    {name : "Sơn", age : 90},
    {name : "Khang", age : 30},
    {name : "Nguyên", age : 18},
    {name : "Lợi", age : 25},
  ];
  return ( 
    <div className="App">
      <header className="App-header">
        {people.map((person,index) => {
            return (
              <div id ={index}>
                <ul>
                  <li>Name of this person is {person.name}</li>
                  <li>Age of this person is {person.age}</li>
                </ul>
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
