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
    {
      title: "Drop",
      image:"/movies/drop.png",
      watchlist: "/add.png"
    },
    {
      title: "The Alto Knights",
      image:"/movies/the-alto-knights.png",
      watchlist: "/add.png"
    },
    {
      title: "Paddington In Peru",
      image:"/movies/paddington-in-peru.png",
      watchlist: "/add.png"
    },
    {
      title: "The Last Showgirl",
      image:"/movies/the-last-showgirl.png",
      watchlist: "/add.png"
    },
    {
      title: "One of Them Days",
      image:"/movies/one-of-them-days.png",
      watchlist: "/add.png"
    },
  ]);

  const[watchlaterCount, setWatchlaterCount] = useState(0);
  const[selected, setSelected] = useState([]);
  const[cssName, setCssName] = useState('selected');
  const[id, setId] = useState('');
  const[mainClass, setMainClass] = useState('main');
  const[watchlist, setWatchList] = useState('watchlist-image');

  const addtoWatchList = (index) => {

    if(movies[index].watchlist == '/add.png'){
      setWatchlaterCount(watchlaterCount + 1);
      movies[index].watchlist = "/remove.png"
      setMovies([...movies]);
      setSelected([...selected, movies[index]]);
    }else{
      setWatchlaterCount(watchlaterCount - 1);
      movies[index].watchlist = "/add.png"
      setMovies([...movies]);

      for(let i=0; i<selected.length;i++){
        if(selected[i].title == movies[index].title){
          selected.splice(i,1)
          setSelected([...selected])
        }
      }
    }
    
  }

  const showMovies = () =>{
    setMainClass('mainSecondary');
    setCssName('visible');
    setWatchList('not-allowed');
    setId('newmain');
    
    console.log(selected);
  }
  return(
    <>
      <div className={mainClass} id={id}>
        <div className='first'>
          <img src='/newlogo.png' width='120'/>
          <button id='watchlist-btn' onClick={()=>{showMovies()}}>Watch Later {watchlaterCount}</button>
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
                    id={watchlist}
                    width="25" onClick={()=>{addtoWatchList(index)}}/>
                </div>
              </div>

          )}
          
            
        </div>

        <div className={cssName}>
            <img 
            src="/close.png" 
            width="30" 
            id="close-btn"
            onClick={()=>{
              setMainClass('main');
              setCssName('selected')
              setId('')
              setWatchList('watchlist-image')
            }}
            />

            {selected.map((item,index)=>
            <div key={index} id="s-movies"> 
              <img src={item.image} width="25"/>
              <h3>{item.title}</h3>
            </div>
            )}
        </div>

      </div>
    </>
  );
}