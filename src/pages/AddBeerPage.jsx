function AddBeerPage() {





    return (
        <div>
          <h2>Add new Beer</h2>
    
          <form action="">
    
            <label htmlFor="titnamele">Name:</label>
            <input type="text" name="name" value={} onChange={}/>
            <br />
    
            <label htmlFor="img">Tagline:</label>
            <input type="text" name="tagline" value={}  onChange={}/>
            <br />

            <label htmlFor="description">Description:</label>
            <textarea name="description" type="text" cols="30" rows="10"></textarea>
            <br />

            <label htmlFor="first_brewed">First Brewed:</label>
            <input type="text" name="first_brewed" value={}  onChange={}/>
            <br />
    
            <label htmlFor="brewers_tips">Brewer's Tips:</label>
            <input type="text" name="brewers_tips" value={}  onChange={}/>
            <br />
    
            <label htmlFor="attenuation_level">Attenuation Level:</label>
            <input type="number" name="attenuation_level" value={}  onChange={}/>
            <br />
    
            <label htmlFor="contributed_by">Contributed By:</label>
            <input type="text" name="contributed_by" value={}  onChange={}/>
            <br />
    
            <button type="submit" onClick={}>Add Beer</button>
    
          </form>
          
        </div>
      )

}

export default AddBeerPage;
