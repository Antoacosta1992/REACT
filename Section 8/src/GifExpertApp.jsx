import { useState } from "react";
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState (['One Punch'])
    
    const onAddCategory = (newCategory) => {
        //categories.push(newCategory);
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
        //setCategories(cat=>[...cat, 'Valorant'])
    
    }


    return(
        <> 
        {/*TITULO*/}
        <h1>- GIF EXPERT APP - </h1>

        {/* IMPUT*/} 
        <AddCategory 
        //setCategories={setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
        />

        {/*LISTADO*/}
        {/*el map me permite barrer los elemnentos del arreglo*/}
     
        {categories.map( (category) => (
                <GifGrid
                    key={category}
                    category={ category}/>

                
            ))
        }
        </>
        
    )
}