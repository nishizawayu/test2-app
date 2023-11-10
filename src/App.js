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
          btndata.map((text,index)=>{
            return <p className='btn' onClick={()=>btnpress(text)} key={index}>{text}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;