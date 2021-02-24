import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Photoshop', price: '$99.99' }

  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <User></User>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Person name='Himangsu sarkar' job="Developer"></Person>
        <Person name="Arif" job="jobholder"></Person>
        <Person name='Subbroto' job='service holder'></Person>
        <Person name='Joni' job='service holder'></Person>
      </header>
    </div >
  );
}

function Person(props) {

  const personStyle = {
    border: "2px solid yellow",
    margin: '10px',
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Profession:{props.job}</h3>
    </div >

  );
}
function Product(props) {

  const productStyle = {
    border: '10px solid gray',
    margin: '10px',
    backgroundColor: 'gray',
    height: '300px',
    width: '400px',
    float: 'left',
    borderRadius: '10px',
    padding: '8px'

  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h2>{props.product.price}</h2>
      <button>Buy now</button>

    </div >

  );
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div >

  );

}

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>

  );
}

export default App;
