import React from 'react'


export default function Meme() {
const [meme ,setMeme] = React.useState({
   toptext : "",
   bottomtext : "",
   randomimg : "https://i.imgflip.com/1ur9b0.jpg"
})

const [allmemes , setAllmemes] = React.useState([])

React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
  .then(resp => resp.json())
  .then(data => setAllmemes(data.data.memes))
})

function getImage(){
  
  const randnum = Math.floor(allmemes.length * Math.random())
  setMeme(prevMeme => ({
    ...prevMeme,
    randomimg: allmemes[randnum].url

  }))
}
function handleChange(event){
  const { name , value} = event.target
  setMeme(prevMeme => ({
    ...prevMeme,
    [name] : value
  }))

}
 
    return (
        <div>
             <main className="main">
             <div className="form">
               <input 
               type="text"
               placeholder="Top text"
               className="form--input" 
               value = {meme.toptext}
               name = "toptext"
               onChange = {handleChange}
               
               />
                <input 
               type="text"
               placeholder="Bottom text"
               className="form--input" 
               value = {meme.bottomtext}
               name = "bottomtext"
               onChange = {handleChange}
               />
               <button className="form-button" onClick={getImage}>
               Get a new meme image 🖼️
              </button>
              </div>
             
             <div className='meme'>
             <img src={meme.randomimg}  className="meme-image" alt="" />
              <h2 className = "meme--text1 top">{meme.toptext} </h2>
             
              <h2 className = "meme--text2 bottom">{meme.bottomtext}</h2>
              </div>
          
          </main>
       
        </div>
    )
}
