import axios from "axios"
import { useState} from "react"
import { useNavigate } from "react-router-dom"


function AddBeerPage() {

    const navigate = useNavigate()


    const [ name, setName] = useState("")
    const [ tagline, setTagline ]= useState("")
    const [ description, setDescription] = useState("")
    const [ firstBrewed, setFirstBrewed] = useState("")
    const [ brewersTips, setBrewersTips] = useState("")
    const [ attenuationLevel, setAttenuationLevel] = useState(0)
    const [ contributedBy, setContributedBy] = useState("")


    const handleNameChange = (event) => {
        setName(event.target.value)
     }

     const handleTaglineChange = (event) => {
        setTagline(event.target.value)
     }

     const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
     }

     const handleFBrewedChange = (event) => {
        setFirstBrewed(event.target.value)
     }

     const handleBrewersTipsChange = (event) => {
        setBrewersTips(event.target.value)
     }

     const handleAttenuationChange = (event) => {
        setAttenuationLevel(event.target.value)
     }

     const handleCBNChange = (event) => {
        setContributedBy(event.target.value)
     }


     const handleCreateBeer = async() => {
        event.preventDefault()
        try {
    
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
              name,
              tagline,
              description,
              first_brewed: firstBrewed,
              brewers_tips: brewersTips,
              attenuation_level: attenuationLevel,
              contributed_by:contributedBy
          })
          
          
          navigate("/beers")
    
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <div>
          <h2>Add new Beer</h2>
    
          <form action="">
    
            <label htmlFor="titnamele">Name:</label>
            <input type="text" name="name" value={name} onChange={handleNameChange}/>
            <br />
    
            <label htmlFor="img">Tagline:</label>
            <input type="text" name="tagline" value={tagline}  onChange={handleTaglineChange}/>
            <br />

            <label htmlFor="description">Description:</label>
            <textarea name="description" type="text" cols="30" rows="10" value={description} onChange={handleDescriptionChange}></textarea>
            <br />

            <label htmlFor="first_brewed">First Brewed:</label>
            <input type="text" name="first_brewed" value={firstBrewed}  onChange={handleFBrewedChange}/>
            <br />
    
            <label htmlFor="brewers_tips">Brewer's Tips:</label>
            <input type="text" name="brewers_tips" value={brewersTips}  onChange={handleBrewersTipsChange}/>
            <br />
    
            <label htmlFor="attenuation_level">Attenuation Level:</label>
            <input type="number" name="attenuation_level" value={attenuationLevel}  onChange={handleAttenuationChange}/>
            <br />
    
            <label htmlFor="contributed_by">Contributed By:</label>
            <input type="text" name="contributed_by" value={contributedBy}  onChange={handleCBNChange}/>
            <br />
    
            <button type="submit" onClick={handleCreateBeer}>Add Beer</button>
    
          </form>
          
        </div>
      )

}

export default AddBeerPage;
