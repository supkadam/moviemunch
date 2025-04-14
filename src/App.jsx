import {useState} from 'react';
import './App.css'

export default function App(){
  const [movies, setMovies] = useState([
    {
      title: "Warfare",
      image:"/movies/warfare.png",
      watchlist: "/add.png"
    },
    {
      title: "The amateur",
      image:"/movies/the-amateur.png",
      watchlist: "/add.png"
    },
    {
      title: "Snow White",
      image:"/movies/snow-white.png",
      watchlist: "/add.png"
    },
    {
      title: "Novocaine",
      image:"/movies/novocaine.png",
      watchlist: "/add.png"
    },
    {
      title: "Locked",
      image:"/movies/locked.png",
      watchlist: "/add.png"
    },
    {
      title: "G20",
      image:"/movies/g20.png",
      watchlist: "/add.png"
    },
    {
      title: "Dog Man",
      image:"/movies/dog-man.png",
      watchlist: "/add.png"
    },
    {
      title: "Black Bag",
      image:"/movies/black-bag.png",
      watchlist: "/add.png"
    },
    {
      title: "Minecraft",
      image:"/movies/a-minecraft-movie.png",
      watchlist: "/add.png"
    },
    {
      title: "Holland",
      image:"/movies/holland.png",
      watchlist: "/add.png"
    },
  ]);

  const[watchlaterCount, setWatchlaterCount] = useState(0);
  const addtoWatchList = (index) => {
    if(movies[index].watchlist == '/add.png'){
      setWatchlaterCount(watchlaterCount + 1);
      movies[index].watchlist = "/remove.png"
    }else{
      setWatchlaterCount(watchlaterCount - 1);
      movies[index].watchlist = "/add.png"
    }
    

  }
  return(
    <>
      <div className='main'>
        <div className='first'>
          <img src='/movie.png' width='120'/>
          <button id='watchlist-btn'>Watch Later {watchlaterCount}</button>
        </div>
        <br/>
        <br/><br/>
        <br/><br/>
        <div className='second'>
          {movies.map((item, index)=>
              <div id='movie' key={index}>
                  <img src={item.image} height="200"/>
                  <div id="watchlist">
                    <p id="para">{item.title}</p>
                    <img src={item.watchlist}
                    id="watchlist-image" 
                    width="25" onClick={()=>{addtoWatchList(index)}}/>
                </div>
              </div>

          )}
          
            
        </div>

      </div>
    </>
  );
}