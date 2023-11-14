import './App.css';

function App() {

  const btndata = ["すごい","かっこいい","可愛い"];
  let i = 0;
  const couter = (text,index)=>{
    console.log(text)
    if(text == "すごい"){
      i++;
      console.log(i);
    }
  }

  return (
    <div className="App">
      <div>
        {
          btndata.map((text,index)=>{
            return <p className='chome-btn' key={index} onClick={()=>couter(text,index)}>{text}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;