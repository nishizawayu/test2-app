import logo from './logo.svg';
import './App.css';

function App() {

  const btnpress = (i) =>{
    console.log(i);
  }

  const btndata = ["すごい","かっこいい","可愛い"];

  return (
    <div className="App">
      <div>
        {
          btndata.map((text)=>{
            return <p className='btn' onClick={()=>btnpress(text)}>{text}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
