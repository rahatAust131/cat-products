import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const cats = [
    {name:"mica", favFood:"fish"},
    {name:"chiba", favFood:"milk"},
    {name:"lucy", favFood:"bread"},
    {name:"rio", favFood:"meat"},
    {name:"albert", favFood:"fish"},
    {name:"rico", favFood:"beef"}
  ];

  const friends = [
    {name:"Monica", favFood:"chicken", favColdDrinks :'diet coke', favWork : 'cleaning', favNum : '7', favPerson : 'Chandler'},
    {name:"Chandler", favFood:"Turkey", favColdDrinks :'Any', favWork : 'making jokes', favNum : '', favPerson : 'Monica'},
    {name:"Rachel", favColdDrinks :'Any', favWork : 'fashion designing', favNum : '', favPerson : 'Monica'},
    {name:"Ross", favColdDrinks :'Any', favWork : 'Paleontology', favNum : '', favPerson : 'Ben'},
    {name:"Pheobe", favFood:"Cookie", favColdDrinks :'cold coffee', favWork : 'singing', favNum : '', favPerson : 'friends'},
    {name:'Mike', favColdDrinks :'Any', favWork : 'playing piano', favNum : '', favPerson : 'Pheobe'},
    {name:'Joey', favFood:"cake", favColdDrinks :'wine', favWork : 'how u doing', favNum : '', favPerson : 'Chandler'},
    {name:'Gunther', favColdDrinks :'', favWork : 'watching rachel', favNum : '', favPerson : 'rachel'},
  ];

  const catsContainerStyle = {
    backgroundColor : 'dimgray',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    flexWrap : 'wrap',
    height : 'auto',
    margin : '5px 0px',
    padding : '5px',
  }

  const counterStyle = {
    backgroundColor : 'violet',
    margin : '10px 0',
    padding : '10px'
  }

  const friendsContainerStyle = {
    backgroundColor : 'blue',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    flexWrap : 'wrap',
    height : 'auto',
    margin : '5px 0px',
    padding : '5px',
  }

  
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <h1 style ={{color:'whitesmoke'}} >My 1st react project</h1>
        </div>
      </header>

      <section>
        <h2>Counter Section</h2>
        <div style ={counterStyle}>
        <Counter ></Counter>
        </div>
      </section>

      <section >
        <div>
          <h2>Cat Care</h2>
          </div>
        <div style = {catsContainerStyle}>
          {
            cats.map(catInfo =>  <Cats element = {catInfo} ></Cats>)
          }
        </div>
      </section>

      <section>
        <div>
          <h2>Friends TV Series Cast</h2>
        </div>
        <div style = {friendsContainerStyle}>
          {
            friends.map(friend => <Friends friendInfo = {friend} ></Friends>)
          }
        </div>
      </section>  

    </div>
  );
}

function Cats(props) {
  
  const catStyle = {
    width : '45%',
    backgroundColor : 'cyan',
    color : 'darkblue',
    margin : '5px 10px',
    padding : '5px',
    borderRadius : '7px'
  }

  const {name, favFood} = props.element;
  return(
    <div style = {catStyle}>
    <h3>CatName: {name}</h3>
    <p>FavFood: {favFood}</p>
    
  </div>
  );
}

function Friends(props) {
  
  const friendStyle = {
    width : '45%',
    backgroundColor : 'greenyellow',
    margin : '5px 10px',
    padding : '5px',
    borderRadius : '7px'
  }

  const {name, favFood, favColdDrinks, favWork, favNum, favPerson} = props.friendInfo;
  return(
    <div style = {friendStyle}>
    <h3>Name: {name}</h3>
    <p>FavFood: {favFood}</p>
    <p>favColdDrinks: {favColdDrinks}</p>
    <p>FavWork: {favWork}</p>
    <p>FavNum: {favNum}</p>
    <p>FavPerson: {favPerson}</p>
  </div>
  );
}

function Counter() {
  const[count, setCount] = useState(10);
  const btnStyle = {
    margin : '5px',
    padding : '15px',
    width : '15%',
    backgroundColor : 'greenyellow',
    fontSize : '16px',
    borderRadius : '11px'
  }
  return (
    <div>
      <h3 style ={{color:'blue'}}>Count : {count}</h3>
      <button style = {btnStyle} onMouseMove = {() => setCount(count+1)} >Increase</button>
      <button style = {btnStyle} onMouseMove = {() => setCount(count-1)} >Decrease</button>
    </div>
  );
} 

export default App;
