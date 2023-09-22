import Game from '../game/Game';
import './gamelist.css';

//Ejemplo de cargar una imagen dentro de la carpeta SRC (NO EN PUBLIC)
//cargarla allí tiene beneficios de rendimiento
import imgSpiderman from '../../assets/img/spiderman.jpg'

const GameList = () =>{
    const thirdGame = { name:'Super Smash Bros. Ultimate - US Version', platform: "Nintendo Switch", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/81G1qFsRHDL._AC_UL600_SR600,400_.jpg"}
    const fourthGame = { name:'Mario Kart 8 Deluxe - US Version', platform: "Nintendo Switch", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/81mqZx5X1XL._AC_UL600_SR600,400_.jpg"}
    const fivethGame = { name:'God of War Ragnarök Launch Edition', platform: "PlayStation", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/817y77i7EFL._AC_UL300_SR300,200_.jpg"}


    const sixthGame =  { name:'Mario Party Superstars - US Version', platform: "Nintendo Switch", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/81FyMssnCXS._AC_UL300_SR300,200_.jpg"}
    const seventhGame =  { name:'Elden Ring', platform: "PlayStation", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/81h2WhI4dtL._AC_UL600_SR600,400_.jpg"}
    const eighthGame = { name:'Super Mario 3D World + Bowsers Fury ', platform: "Nintendo Switch", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/91vyVfjkQzS._AC_UL300_SR300,200_.jpg"}

    const ninethGame =  { name:'The Legend of Zelda: Tears of the Kingdom', platform: "Nintendo Switch", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/91hN+j+G7LL._AC_UL600_SR600,400_.jpg"}
    const tenthGame =  { name:'Mario + Rabbids Sparks of Hope', platform: "Nintendo Switch", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/813FElIFiQL._AC_UL300_SR300,200_.jpg"}
    const eleventhGame = { name:'Star Wars Jedi: Survivor ', platform: "PlayStation", imgUrl :"https://images-na.ssl-images-amazon.com/images/I/71YdSxFpzCL._AC_UL300_SR300,200_.jpg"}
    const twelfthGame = { name:'MARVEL’S SPIDER-MAN 2', platform: "PlayStation", imgUrl :imgSpiderman}

    const listGames = [sixthGame,seventhGame,eighthGame];

    //Se agrega la propiedad Key ya q react necesita un identificador q sea UNICO (para este ejemplo uso name, pero podria ser un Id)
    const listGames2 = ()=>[ninethGame,tenthGame,eleventhGame,twelfthGame].map((game,index)=><Game {...game} key={game.name} getGameListFunction={getSelectedGame}></Game>)

    const entireGameList = [
        {name :"Pokémon Scarlet - US Version", platform: "Nintendo Switch", imgUrl:"./img/scarlet.jpg"},
        {name :"Pokémon Legends: Arceus - US Version", platform: "Nintendo Switch", imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71bhNf8QiOS._AC_UL600_SR600,400_.jpg"},
        thirdGame,
        fourthGame,
        fivethGame,
        sixthGame,
        seventhGame,
        eighthGame,
        ninethGame,
        tenthGame,
        eleventhGame
    ]

    //funcion q se envia al hijo, este la invoca cuando clickean desde gameComponent
    const getSelectedGame =(name)=>{
        const selectedGame = entireGameList.find(game => game.name === name);
        console.log(selectedGame);
    }

    //Para acceder a las variables es con  {} amenos q sea texto
    return <section className="gamelist">
        <Game name={"Pokémon Scarlet - US Version"} platform = {"Nintendo Switch"} imgUrl = "./img/scarlet.jpg" getGameListFunction={getSelectedGame}/>
        <Game name={"Pokémon Legends: Arceus - US Version"} platform = {"Nintendo Switch"} imgUrl = "https://images-na.ssl-images-amazon.com/images/I/71bhNf8QiOS._AC_UL600_SR600,400_.jpg" getGameListFunction={getSelectedGame}/>
        <Game {...thirdGame} getGameListFunction={getSelectedGame}/> {/* Ejemplo con spreed variable */}
        <Game name={fourthGame.name} platform = {fourthGame.platform} imgUrl = {fourthGame.imgUrl} getGameListFunction={getSelectedGame}/>
        <Game {...fivethGame} getGameListFunction={getSelectedGame}>
            {/** tambien se peude enviar contenido entre los tags igual q en angular content child */}
            <h5>&#9733; Game Of The year</h5>
        </Game>
        {/* De esta forma recorro el array y envio cada uno de los objetos para q sean generados,
        //Se agrega la propiedad Key ya q react necesita un identificador q sea UNICO (para este ejemplo uso name, pero podria ser un Id) 
            no se recomienda utilizar el index del array, ya q si el array cambia podría causar errores
        */}
        {listGames.map((game,index)=>  <Game {...game} key={index} getGameListFunction={getSelectedGame}></Game>)}
        {/*  el mismo proceso invocando una funcion */}
        {listGames2()} 
        </section>
}

export default GameList