import logo from './logo.svg';
import './App.css';
import Para from './Para';
import Butt from './Butt';
import Card from './Card';
import Counter from './Counter';
import data from './people.json'

function App() {

  const user = "Uche"

  return (
    <>
    <div className="App">
      <h1>
        Hello {user}!!!
      </h1>
      <Para/>
      <Para/>
      <Butt text="Say Hi"
      color="Yellow"/>
      <Butt text="Click Me"
      color="green"/>
      <Butt text="Delete"
      color="Red"/>
      
      <Counter/>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
      }}>

        {
          data.map(i=>(<Card {...i}/>))        }


      </div>



      </div>
      
    </>
  );
}

export default App;
