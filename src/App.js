
import './App.css';
import logo from './logo-meme.png'
import Meme from './Meme'


function App() {

  return (
    <>
      <div className="App">
        <div className="header">
          <img src={logo} style={{border:"4px solid black", borderRadius:"500px", width:"60px" , height:"60px" , marginTop:"0.32%"  }} alt="" />
          <h2 style={{marginLeft:"4%" }}>Meme--Generator</h2>
        </div>
      
        <Meme/>
      </div>
    
    </>
    
  );
}

export default App;
