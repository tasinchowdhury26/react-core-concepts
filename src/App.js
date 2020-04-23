import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Thor','Ironman','Black Widow','Captain America','Hawkeye','Hulk','Doctor Strange','Black Panther'];
  const products = [
    {name : 'Photoshop', price : '$49.99'},
    {name : 'AutoCad', price : '$89.99'},
    {name : 'Illustrator', price : '$59.99'},
    {name : 'Logisim', price : '$24.99'},
    {name : 'Itunes', price : 'Free'}
];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <h1>Users</h1>
        <Users></Users>
        <h1>Heros : </h1>
        <ul>
          {
            heros.map(hero =><li>{hero}</li>)
          }
        </ul>
        <h1>Products : </h1>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}
function Person(props)
  {
    const personStyle = {
      border : '7px solid lightgray',
      borderRadius : '20px',
      color : 'whitesmoke',
      margin : '15px',
      padding : '20px',
      width : '700px'
    }
    return (
    <div style={personStyle}>    
        <h1>The first one is : {props.name}</h1>    
        <p>and his awesome {props.job} skills</p>    
    </div> 
    )                                       //if we have multiple elements, those need to be packed, in a div. otherwise throws an error.
  }
function Product(props)
  {
    const productStyle = {
      backgroundColor : 'lightgrey',
      height : '250px',
      width : '250px',
      padding : '5px',
      margin : '10px',
      border : '10px solid whitesmoke',
      borderRadius : '10px',
      float : 'left'
    }
    const {name,price} = props.product;
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>      
        <button>Buy Now</button>
      </div>
    )
  }
  function Counter()
  {
    const [count, setCount] = useState(0);                //Must import useState() if not included on top
    // const handleIncrese = () => setCount(count + 1);    //setCount() returns the updated value of count
    return(
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>Counter : {count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>   
      </div>                                                        //Try other events eg=> onMouseMove, etc.
    )
  }
  function Users()
  {
    const [user, setUser] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
    },[])
    return (
      <div>
        <h3>Current Dynamic Users : {user.length}</h3>
        <ul>
          {
            user.map(user => <li>{user.name}</li>)
          }
        </ul>
        <ul>
          {
            user.map(user => <li>{user.email}</li>)
          }
        </ul>
      </div>
    )
  }

export default App;
