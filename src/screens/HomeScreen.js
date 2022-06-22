import React , {useState, useEffect} from "react";
import Card from "../components/Card";

const HomeScreen = () => {

    const [Data, setData] = useState([]);

    // on attends le retour de l'url avant de fetch la response dans un json
    const data = async () => {

    const response = await fetch(`https://dummyjson.com/users`);
        const json = response.json();
        return json;

    }

    // on stock la partie data.users du json dans un state afin de pouvoir récupérer en une fois toutes les données nécessaires 
    const datainit = async () => {
         await data().then(data => {
                setData(data.users);
            
            }
            ).catch(error => {
                console.log(error);
            }
        )
        }

    useEffect(() => {
         datainit();
    }
    ,[])

    return(
        <div id='containCards'>
           { 
           // on boucle sur le state Data qui contient toutes les infos de data.users 
           //on créer une clef par card et on envoie les données nécessaires aux cards en props
                Data.map((e, k)=> {
                return(
                    <Card key={k} firstName={e.firstName} lastName={e.lastName} image={e.image} maidenName={e.maidenName} 
                    username={e.username} email={e.email} birthDate={e.birthDate} gender={e.gender} height={e.height}
                    weight={e.weight} adress={e.address.address} adressCity={e.address.city} adressPostalCode={e.address.postalCode}/>
                )
                })
            }
        </div>
    )
}

export default HomeScreen