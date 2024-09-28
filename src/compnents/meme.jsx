import React, {useState, useEffect} from 'react'



const Meme = () => {
    const [memeItem, setMemeItem] = useState({
      topText: "",
      bottomText: "",
      randomName: "Nike Air Max 270"
    });

    const [allMeme, setAllMeme] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
      // Calling the api data
      fetch("https://api.imgflip.com/get_memes")
      //   .then(res => res.json())
      // // Update the state with fetched data
      //   .then(data => setAllMeme(data.data.memes)) 

// A more complete Error Handling request
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          } return response.json() // Checking if response is good
        })
      // Updating the state with fetched response
        .then(data => {
          setAllMeme(data.data.memes);
          setLoading(false);
        })

    }, [])
    // To handle Loading with request
    if (loading) {
      return(
        <div> Loading...</div>
      )
    }

    if (error)  {
      return(
        <div> Error: {error}</div>
      )
    }

    function getMeme() {
      const randomNmber = Math.floor(Math.random() * allMeme.length);
      const url = allMeme[randomNmber].url;
      setMemeItem(prevmemeItem => ({
        ...prevmemeItem, 
        randomName: url,
      }));
    }
    
    // Fubction to handle value from the form 
    function handleChange (event) {
      const {name, value} = event.target
      setMemeItem(prevState => ({
        ...prevState, [name] : value
      }))
    }


  return (
    <main>
      <div className='form'>
        <input type='text'  className='form-input'
          placeholder='Top text'
          name='topText'
          value={memeItem.topText}
          onChange={handleChange}/>

        <input type='text'  className='form-input'
        placeholder='Bottom text'
        name='bottomText'
        value={memeItem.bottomText}
        onChange={handleChange}/>

      
        <button className='form-button' onClick={getMeme}>Get a new Image</button>
      </div>
      <div className='meme'>
        <h3 className='meme-text-top'>{memeItem.topText}</h3>
        <img src= {memeItem.randomName} alt='' className='meme-img' />
        <h3 className='meme-text-down'>{memeItem.bottomText}</h3>
      </div>
      
    </main>
  )
}

export default Meme