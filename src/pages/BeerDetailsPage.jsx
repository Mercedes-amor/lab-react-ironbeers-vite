import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function BeerDetailsPage() {

    const [beerDetail, setBeerDetail] = useState(null)
    const params = useParams()

    useEffect(() => {
        getBeers()
    }, [params.beerId])

    const getBeers = async () => {
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`);
          console.log("response.data details", response.data);
          setBeerDetail(response.data);
          console.log("beerDetail", beerDetail.name)
        } catch (err) {
          console.log(err);
        }
      };

      if (beerDetail === null) {
        return <h3>...loading</h3>;
      }

    return (
        <div className="beerCard">
           <img src={beerDetail.image_url} alt="beerImg" height={200} />
           <div>
                <h3>{beerDetail.name}</h3>
                <p>{beerDetail.tagline}</p>
                <p>{beerDetail.first_brewed}</p>
                <p>{beerDetail.attenuation_level}</p>
                <p>{beerDetail.description}</p>
                <p>{beerDetail.contributed_by}</p>
           </div>

        </div>
    )
}

export default BeerDetailsPage;
