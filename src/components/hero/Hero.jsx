import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {getHeroById} from '../../selectors/getHeroById'

export const Hero = () => {
  const { heroId } = useParams();
  const hero= useMemo(()=>getHeroById(heroId),[heroId]) 
  const navigate=useNavigate()
  
  if(!hero){
    return <Navigate to='/'/>
  }
  
  const pathImage=`/assets/${hero.id}.jpg`


  const handleReturn=(publisher)=>{
    
    navigate(-1)
    
  }

  return (
    <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img src={pathImage} alt={hero.superhero} className='img-thumbnail'/>
        </div>

        <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group">
                  <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
                  <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
                  <li className="list-group-item"><b>First appearence: </b>{hero.first_appearance}</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>

            <button className="btn btn-outline-dark " onClick={()=>handleReturn(hero.publisher)}>Regresar</button>
        </div>
      
    </div>
  );
};
