import { Map, YMaps, Placemark} from "react-yandex-maps"
import "../Contact.page/Contactpage.css"


  const Contact = () => (
   
    
    <YMaps>
      <div className="map_conteiner"> 
      <h1>Наш адрес:</h1>
        <Map defaultState={{
          center: [43.318366, 45.692421], zoom: 13
        }}>
          <Placemark geometry={[43.324675, 45.692376]}/>
        </Map>
      </div>
      </YMaps>
     
  );

  export { Contact }