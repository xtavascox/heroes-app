import { heroes } from "../data/heroes"



export const getHeoresByName=(name='')=>{
    console.log('hero called ');
    if(name===''){
        return []
    }
    return heroes.filter(heroe=>heroe.superhero.toLowerCase().includes(name.toLowerCase())) 
    
}