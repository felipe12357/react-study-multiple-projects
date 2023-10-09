import { Fragment, useState } from "react";

const UseStageObjects = () => {

    const listPeople = [ 
        {name :'Andres',hobby:'Gaming', job:'Developer'},
        {name :'Natalia Pulgarín',hobby:'Dance', job:'Secretary'},
        {name :'Sara Zuleta',hobby:'Cooking', job:'Managger'},
        {name :'Elizabeth Angel',hobby:'Talk', job:'Secretary'},
        {name :'Valentina Roldán',hobby:'Travel', job:'Lawyer'}
    ]

   const [person,setPerson] = useState({
    name:'Andrés',
    hobby:'Gaming',
    job:'Developer'
   });

   const changePerson = ()=> {
       const nextPersonNumber = Math.floor(Math.random() * (4 - 0 + 1) + 0);
     
      // setPerson(listPeople[nextPersonNumber]);

       // para poder acceder al valor recien actualizado se debe hacer dentro de la funcion:
       // de esta forma se puede crear la funcion la cual de manera predeterminada nos carga el valor actual
       setPerson((currentValue)=>{
            console.log(currentValue)
            const person = listPeople[nextPersonNumber];
            console.log(person);
            //Importante destacar q se debe retornar el nuevo valor
            return person;
        });

   }

  return (
    <Fragment>
    <div>Ejemplo 3, use state con objetos; obtener el valor asignado sin delay</div>
    <div>
        <h4>{person.name} - {person.hobby} - {person.job}</h4>
        <button className="button--small" onClick={changePerson}>Next Person</button>
    </div>
    </Fragment>
  )
}

export default UseStageObjects