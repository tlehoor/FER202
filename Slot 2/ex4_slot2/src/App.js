import logo from './logo.svg';
import './App.css';

function App() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  //////////////////////////////////

  const After1987 = companies.filter(company => company.start > 1987);
  const CompanyRetail = companies.filter(company => company.category === "Retail");
  const sortedCompanies = companies.sort((a, b) => a.end - b.end);
  const sortAgeDescending = ages.sort((a, b) => b - a);
  const sum = ages.reduce((total, age) => total + age, 0);
  return (
    <div className="App">
      <header className="App-header">

        {/* ////////////////////////////// */}

        <h1>
          List of Company
        </h1>
        {companies.map((c) => (
          <ul>
            <li>{c.name}, {c.category}</li>
          </ul>
        ))}

        {/* /////////////////////////// */}

        <h1>
          List of Company that started after 1987
        </h1>
        {After1987.map((c) => (
          <ul>
            <li>{c.name}, {c.category}</li>
          </ul>
        ))}

        {/* ///////////////////////// */}

        <h1 style={{color:'red'}}>
          companies that have category Retail, increment their start by 1
        </h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {CompanyRetail.map((c) => (
              <tr>
                <td>{c.name}</td>
                <td>{c.category}</td>
                <td>{c.start + 1}</td>
                <td>{c.end}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ///////////////////////////// */}

        <h1>
          Sort the companies based on their end date
        </h1>
        {sortedCompanies.map((c) => (
          <ul>
            <li>{c.name}, {c.end}</li>
          </ul>
        ))}

        {/* /////////////////////////////////// */}

        <h1>
          Sort the ages array in descending order
        </h1>


        <ul>
          {sortAgeDescending.map((age) => (
            <li>
              {age}
            </li>
          ))}
        </ul>



<h1>
Sum if you add all the ages using reduce : {sum}
</h1>

      </header>
    </div>
  );
}

export default App;
