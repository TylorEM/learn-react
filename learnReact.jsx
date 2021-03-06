//* Basic JSX
import React from 'react';
import { render } from 'react-dom';

const element = <p>My first JSX</p>;
const root = document.querySelector('#react-root');
render(element, root);

//---------------------------------------------------------

//* Attributes I

import React from 'react';
import { render } from 'react-dom';

const element = (
  <p id="promo" className="selected">
    Hello World
  </p>
);
const root = document.querySelector('#react-root');
render(element, root);

//---------------------------------------------------------

//* Supermarket tagline

import React from 'react';

const getTagline = () => {
  return <h2 className="subtitle">Grocery shopping simplified</h2>;
};

// sample usage
console.log(getTagline());

//---------------------------------------------------------

//* Login status

import React from 'react';

const getLoginStatus = (is_loggedin) => {
  if (is_loggedin) {
    return <p>You are logged in</p>;
  }
  return <a href="/login">Login</a>;
};

// Sample usage
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));

//---------------------------------------------------------

//* Navbar

import React from 'react';

const getNavbar = (user) => {
  return <div>Logged in as {user.name} </div>;
};

// Sample usage
const element = getNavbar({
  name: 'Sam',
  age: 34,
});

//---------------------------------------------------------

//* Notifications

import React from 'react';

const getNotification = (notifications) => {
  return <p>You have {notifications.length} new notifications</p>;
};

const notifications = [
  {
    id: 1,
    text: 'Your order has been delivered',
  },
  {
    id: 2,
    text: 'Your coupon code has expired',
  },
];

//Sample usage
const element = getNotifications(notifications);
console.log(element);

//---------------------------------------------------------

//* Navbar II

import React from 'react';

const getNavbar = (user) => {
  return (
    <div>
      Logged in as {user.firstName} {user.lastName}. Log out
    </div>
  );
};

// Sample usage
const element = getNavber({
  firstName: 'Tylor',
  lastName: 'Marshall',
  age: 26,
});
console.log(element);

//---------------------------------------------------------

//* Dynamic class

import React from 'react';

const getPaymentButton = (user) => {
  let name = 'disabled';
  if (user.is_loggedin) {
    name = 'clickable';
  }
  return <button className={name}>Pay</button>;
};

//Sample usage
const user = {
  id: 1,
  is_loggedin: true,
};

console.log(getPaymentButton(user));

//---------------------------------------------------------

//* Payment methods

//! When adding props that are both static and dynamic, wrap the className value inside curly brackets alongside with the uptick symbol. This allows you to add the dynamic variable ${value}.

import React from 'react';

const getPaymentMethod = (name) => {
  return <li className={`payment-method option-${name}`}>{name}</li>;
};

// Sample usage

console.log(getPaymentMethod('card'));
console.log(getPaymentMethod('paypal'));

//---------------------------------------------------------

//* Payment methods dropdown

import React from 'react';

const getPaymentMethods = () => {
  return (
    <select name="payment" className="payment-methods">
      <option className="payment-method" value="payment">
        Card
      </option>
      <option className="payment-method" value="payment">
        Paypal
      </option>
      <option className="payment-method" value="payment">
        Cash on delivery
      </option>
    </select>
  );
};

// Sample usage

console.log(getPaymentMethods());

//---------------------------------------------------------

//* Dropdown menu

import React from 'react';

const getDropdownMenu = () => {
  return (
    <ul id="dropdown-menu" className="dropdown">
      <li>Profile</li>
      <li>Orders</li>
      <li className="separator"></li>
      <li>Logout</li>
    </ul>
  );
};

// Sample usage

console.log(getDropdownMenu());

//---------------------------------------------------------

//* User Avatar

import React from 'react';

const getUserAvatar = (path) => {
  return <img src={path} alt="path" />;
};

// Sample usage

const url =
  'https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png';

console.log(getUserAvatar(url));
//---------------------------------------------------------

//* Footer

import React from 'react';

const getFooter = () => {
  return (
    <>
      <h3>Your online supermarket</h3>
      <ul>
        <li>Contacts</li>
        <li>Press</li>
        <li>About</li>
      </ul>
      <p>All rights reserved &copy;</p>
    </>
  );
};

// Sample usage

console.log(getFooter());
//---------------------------------------------------------

//* Hero Component

import React from 'react';
import { render } from 'react-dom';

const Hero = () => {
  return (
    <>
      <h1>Welcome to our supermarket</h1>
      <p>Start shopping</p>
    </>
  );
};

// Sample usage

render(<Hero />, document.querySelector('#react-root'));

//---------------------------------------------------------

//* Navbar Component

import React from 'react';
import { render } from 'react-dom';

const Navbar = () => {
  return (
    <>
      <h3>Supermarket</h3>
      <p>Start shopping</p>
    </>
  );
};

const root = document.querySelector('#react-root');
render(<Navbar />, root);
//---------------------------------------------------------

//* One Component per file

//? index.js

import React from 'react';
import { render } from 'react-dom';
import Hero from './Hero.js';

const root = document.querySelector('#react-root');

render(<Hero />, root);

//? Hero.js

import React from 'react';

const Hero = () => {
  return (
    <>
      <h1 className="title">Supermarket</h1>
      <p>Start shopping</p>
    </>
  );
};

export default Hero;

//---------------------------------------------------------

//* Multiple Components

//? index.js

import React from 'react';
import { render } from 'react-dom';
import Button from './Button.js';
import Link from './Link.js';

const App = () => {
  return(
    <>
      <Button />
      <Button />
      <Link />
    </>
  )
};

//? Button.js

import React from 'react';

const Button = () => {
  return <button>Button text</button>;
};

export default Button;

//? Link.js

import React from 'react';

const Link = () => {
  return <a href="#">Link text</a>;
};

export default Link;

// Sample usage
render(<App />, document.querySelector('#react-root'))

//---------------------------------------------------------
  
//* Shopping Cart

import React from 'react';
import {render} from 'react-dom';

const ShoppingCart = ({count}) => {
  return (
    <div>{count} items in your cart</div>
  )
}

const root = document.querySelector('#react-root')
render(<ShoppingCart count={4} />, root)

//---------------------------------------------------------

//* More props

import React from 'react'
import {render} from 'react-dom'

const Navbar = ({notifications, user}) => {
  return (
    <>
      <div>Welcome {user.firstName} {user.lastName}</div>
      <p>You've got {notifications.length} notifications</p>
    </>
  );
  
}

let notifications = [{
  id: 1,
  text: 'Order delivered'
},{
  id: 2,
  text: 'Order received'
}];

const user = {
  firstName: 'Tylor',
  lastName: 'Marshall'
}

const root = document.querySelector('#react-root')
render(<Navbar notifications={notification} user={user} />, root)

//---------------------------------------------------------

//* Button I

import React from 'react';
import {render} from 'react-dom';

const Button = ({size}) => {
  if (!size) {
    return <button className='btn-medium'>Text here</button>
  }

  return (
    <button className={`btn-${size}`}>Text here</button>
  )
}

const root = document.querySelector('#react-root');
render(<Button size='small' />, root);

//--------------------------------------------------------

//* Button II

import React from 'react'
import {render} from 'react-dom'

const Button = (props) => {
  return (
    <button>{props.children}</button>
  )
}

const root = document.querySelector('#react-root')

render(<Button>Login</Button>, root)

//-------------------------------------------------------

//* Destructuring props

import React from 'react'
import {render} from 'react-dom'

const Button = ({className, children}) => {
  return (
    <button className={className}>{children}</button>
  )
}

const root = document.querySelector('#react-root')

render(<Button className='primary'>Login</Button>, root)

//-------------------------------------------------------

//* UI Kit

//? index.js

import React from 'react'
import {render} from 'react-dom'
import Link from './Link.js'
import Button from './Button.js'
import Container from './Container.js'
import Input from './Input.js'

const App = () => {
  return (
    <>
      <Container>
        <Link />
        <Button type='submit' disabled={false} >Shopping online</Button>
        <Input type='email'/>
      </Container>
    </>
  )
}

render(<App />, document.querySelector('#react-root'))

//? Button.js

import React from 'react'

const Button = ({type, disabled, children})=> {
  return (
    <button type={type} disabled={disabled} className='ui-button'>{children}</button>
  )
}

export default Button

//? Container.js

import React from 'react'

const Container = ({children}) => {
  return (
    <div className='ui-container'>{children}</div>
  )
}

export default Container

//? Input.js

import React from 'react'

const Input = ({type='text'}) => {
  return (
    <input type={type} placeholder='input text' name='input' className='ui-textfield'/>
  )
}

export default Input

//? Link.js

import React from 'react'

const Link = ({href, children}) => {
  return (
    <a className='ui-link' href={href}>{children}</a>
  )
}

export default Link

//-------------------------------------------------------

//*Impure to Pure

import React from 'react'
import {render} from 'react-dom'

const Navbar = (props) => {
  const fullName = `${props.user.first_name} ${props.user.last_name}`;

  return(
    <div>Hello {fullName}.<br /> You are now {props.user.ag + 1} years old.</div>
  )
} 

const user = {
  first_name: 'Tylor',
  last_name: 'Marshall',
  age: 26
}

render(
  <>
    <Navbar user={user} />
    <Navbar user={user} />
  </>, document.querySelector('#react-root')
)

//-------------------------------------------------------

//* Conditional rendering

import React from 'react'
import {render} from 'react-dom'

const WelcomeUser = ({user}) => {
  if (!user) {
    return null
  }
  return (
    <h1>Welcome {user.name}</h1>
  )
}

const user = {
  id: 1,
  name: 'Tylor Marshall'
}

const root = document.querySelector('#react-root')

render(<>
  <WelcomeUser user={user} />
  <WelcomeUser />
</>, root)

//-------------------------------------------------------

//* Dark theme I

import React from 'react'
import {render} from 'react-dom'

const Navbar = ({theme, children}) => {
  if (theme !== 'dark') {
    return <h1 className='light'>{children}</h1>
  }
  return <h1 className='dark'>{children}</h1>
}

const root = document.querySelector('#react-root')

render(
<>
  <Navbar theme='dark'>Online supermarket</Navbar>
  <Navbar theme='light'>Online supermarket</Navbar>
</>, root)

//-------------------------------------------------------

//* Dark theme II

import React from 'react'
import {render} from 'react-dom'
import clsx from 'clsx'

const Navbar = ({theme}) => {
  const className= clsx({'dark': theme === 'dark', 'light': theme === 'light'})
  return <h1 className={`navbar ${className}`}>Online supermarket</h1>
}

const root = document.querySelector('#react-root')

render(
  <>
    <Navbar theme='light' />
    <Navbar theme='dark' />
  </>, root
)

//-------------------------------------------------------

//* UI Kit > Button

import React from 'react'
import {render} from 'react-dom'
import Button from './Button.js'

//? index.js

const App = () => {
  return (
    <>
      <Button tabIndex='2' disabled={true}>Login</Button>
      <Button className='ui-button'>Register</Button>
    </>
  )
}

render(<App />, document.querySelector('#react-root'))

//? Button.js

import React from 'react'

const Button = ({children , ...rest}) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export default Button

//-------------------------------------------------------

//* Improved UI Kit

//! When using clsx below I was adding curly brackets around the className aspect of the clsx 'classes' variable, which is not needed. The curly brackets only need to be used when adding dynamic props within the element you wish to return.

//? index.js

import React from 'react'
import {render} from 'react-dom'

import Link from './Link.js'
import Container from './Container.js'
import Button from './Button.js'
import Input from './Input.js'

const App = () => {
  return (
    <>
      <Container className='app'>
        <Link href='#'>React Tutorial</Link>
        <Button disabled={true}>Login</Button> 
        <Input placeholder='Full Name' name='full_name' />
      </Container>
    </>
  )
}

render(<App />, document.querySelector('#react-root'))

//? Button.js

import React from 'react'
import clsx from 'clsx'

const Button = ({className, children, ...rest}) => {
  const classes = clsx('ui-button', className)
  return (
    <button className={classes} {...rest}>{children}</button>
  )
}

export default Button

//? Container.js

import React from 'react'

const Container = ({className, children, ...rest}) => {
  const classes = clsx('ui-container', className)
  return (
    <div className={classes} {...rest}>{children}</div>
  )
}

export default Container

//? Input.js

import React from 'react'
import clsx from 'clsx'

const Input = ({className, type='text', ...rest}) => {
  const classes = clsx('ui-textfield', className)
  return <input className={classes} type={type} {...rest} />
}

export default Input

//? Link.js

import React from 'react'
import clsx from 'clsx'

const Link = ({className, children, ...rest}) => {
  const classes = clsx('ui-link', className)
  return <a className={classes} {...rest}>{children}</a>
}

export default Link

//------------------------------------------------------

//* Array destructuring I

const printFullName = (name) => {
  console.log(name)
  const [first, last] = name
  return `${first} ${last}`
}

console.log(printFullName(['Tylor', 'Marshall']))
console.log(printFullName(['Alexus', 'Graham']))

//------------------------------------------------------

//* Array destructuring II 

const printUserDetails = user => {
  console.log(user)
  const [name, age] = user

  return `${name} is ${age} years old.`
}

console.log(printUserDetails(['Tylor', 26]))
console.log(printUserDetails(['Alexus', 23]))

//------------------------------------------------------

//* Destructuring from functions

//? index.js

import getAge from './helpers.js'

const destructureTest  = () => {
  const [age, describeAge] = getAge()
}

//? helper.js 

const getAge = () => {
  const age = 26

  const describeAge = () => {
    return `The age is ${age} years old` 
  }

  return [age, describeAge]
}

export default getAge


//------------------------------------------------------

//* Destructuring from function II

//? index.js

import getPrice from './helpers.js'

const destructureTest = () => {
  const [price, describePice] = getPrice()

  console.log(price)
  console.log(describePrice())
}

//? helpers.js

const getPrice = () => {
  const price = 2
  const describePrice = () => {
    return `The price is $${price}.`
  }

  return [price, describePrice]
}

//------------------------------------------------------

//* Counter

import React, {useState} from 'react';
import {render} from 'react-dom'

const Counter = () => {
  const [seconds, setSeconds] = useState(0)

  return <h2>{seconds} seconds elapsed</h2>
}

render(<Counter />, document.querySelector('#react-root'))

export default Counter;

//------------------------------------------------------

//* Countdown

import React, {useState} from 'react'
import {render} from 'react-dom'

const Countdown = () => {
  const [count, setCount] = useState(10)

  return <h2>{count} times remaining</h2>
}

render(<Countdown />, document.querySelector('#react-root'))

//------------------------------------------------------

//* Click to log

import React from 'react'
import {render} from 'react-dom' 

const App = () => {
  return <button onClick={() => console.log('Hello World!')}>click me</button>
}

render(<App />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Counter

import React, {useState} from 'react'
import {render} from 'react-dom'

const Counter = () => {
  const [clicked, setClicked] = useState(0)

  return (
    <>
      <h2>{clicked} times clicked</h2>
      <button onClick={() => setClicked(clicked + 1)}>Add 1</button>
    </>
  )
}

render(<Counter />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Countdown

import React, {useState} from 'react'
import {render} from 'react-dom'

const Countdown = () => {
  const [times, setTimes] = useState(10)

  return (<>
    <h2>{times} times remaining</h2> 
    <button onClick={() => setTimes(times - 1)}></button>
  </>)
}

render(<Countdown />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Broken counter

import React, {useState} from 'react'
import {render} from 'react-dom' 

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count} times clicked</div>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  )
}

render(<Counter />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Closures I

const getUser = (firstName, lastName) => {
  const getFullName = () => {
    return (`${firstName} ${lastName}`)
  }

  return {
    firstName: firstName,
    lastName: lastName,
    fullName: getFullName()
  }
}

console.log(getUser('Tylor', 'Marshall'))

//---------------------------------------------------------

//* Closures II

const getUser = (age) => {
  const getCanVote = () =>{
    return age >= 18
  }

  return {
    canVote : getCanVote()
  }
}

console.log(getUser(21))

//---------------------------------------------------------

//* Change event

import React from 'react'
import {render} from 'react-dom'

const Navbar = () => {
  const handleSelectChange = () => {
    console.log('Country changed')
  }

  return (
      <select className='countries' onChange={handleSelectChange}>
        <option>Netherlands</option>
        <option>Belgium</option>
        <option>France</option>
      </select> 
    )
}

render(<Navbar />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Name event handler

import React from 'react'
import {render} from 'react-dom'

const Counter = () => {
  const handleConsoleLogClick= () => {
    console.log('Button clicked')
  }
  return <button onClick={handleConsoleLogClick}>Add 1</button>
}

const root = document.querySelector('#react-root')

render(<Counter/>, root)

//---------------------------------------------------------

//* Counter

import React, {useState} from 'react'
import {render} from 'react-dom'

const Counter = () => {
  const [times, setTimes] = useState(0)

  const handleIncrementClick = () => {
    setTimes(times + 1)
  }

  return (<> 
    <h2>{times} times clicked</h2>   
    <button onClick={handleIncrementClick}>Add 1</button>
  </>)
}

render(<Counter />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Countdown

import React, {useState} from 'react'
import {render} from 'react-dom'

const Countdown = () => {
  const [count, setCount] = useState(10)

  function handleDecrementClick() {
    setCount(count - 1)
  }

  return (<>
    <h2>{count} times remaining</h2> 
    <button onClick={handleDecrementClick}></button>
  </>)
}

const root = document.querySelector('#react-root')
render(<Countdown />, root)

//---------------------------------------------------------

//* Proper Countdown

//! When doing this challenge, at first, I had tried to use "disabled" as a prop with the value of false in order to pass it into the handleDecrementClick function within a separate if conditional statement - if (counter === 0) {disabled === true}. I added the disabled prop to the button with a value of {disabled} and it did not work.

import React , {useState} from 'react'
import {render} from 'react-dom'

const Countdown = () => {
  const [counter, setCounter] = useState(5)

  function handleDecrementClick() {
    if (counter > 0) {
      setCounter(counter - 1)
    } 
  }

  return (<>
    <h2>{counter} times remaining</h2> 
    <button onClick={handleDecrementClick} disabled={counter === 0}>Countdown</button>
  </>)
}

render(<Countdown />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Resetting Clock

//! When doing this challenge I had seconds, within the if statement, === to 60, thinking that when seconds reached 60 the setSeconds would render to 0. This is the wrong thought process because you have think about where this event handler is attached/what kind of event it is. It is attached to a button and is an onClick event. Meaning that the correct way to think about this is if the button is clicked while the value of seconds === 59 then setSeconds renders to 0.

import React, {useState} from 'react'
import {render} from 'react-dom'

const Clock = () => {
  const [seconds, setSeconds] = useState(0)

  function handleIncrementClick() {
    if (seconds === 59) {
     setSeconds(0)
    } else {
      setSeconds(seconds + 1)
    }
  }

  return (<>
    <h1>{seconds} seconds</h1> 
    <button onClick={handleIncrementClick}>Add 1</button>
  </>)
}

//---------------------------------------------------------

//* Counter with modes

import React, {useState} from 'react'
import {render} from 'react-dom'

const Counter = ({mode}) => {
  const [counter, setCounter] = useState(0) 

  function handleButtonClick() {
    if(mode === 'increment') {
      setCounter(counter + 1)
    } else if (mode === 'decrement') {
      setCounter(counter - 1)
    }
  }

  return (<>
    <h2>{mode}ing counter</h2> 
    <h3>{counter} times</h3>
    <button onClick={handleButtonClick}>{mode}</button>
  </>)
}

const root = document.querySelector("#react-root")

//? Sample Usage

render(<>
  <Counter mode='increment'/>
  <Counter mode='decrement'/>
</>, root)



//---------------------------------------------------------

//* Configurable Counter

import React, {useState} from 'react';
import {render} from 'react-dom'

const Counter = ({incrementBy}) => {
  const [counter, setCounter] = useState(0)
  
  function handleButtonClick() {

    setCounter(counter + incrementBy)

    //if (incrementBy === 1) {
    //  setCounter(counter + 1)
    //} else if (incrementBy === 5) {
    //  setCounter(counter + 5)
    //} else if (incrementBy === 2) {
    //  setCounter(counter + 2) 
    //}
  }

  return (<>
    <h2>{counter} times clicked</h2> 
    <button onClick={handleButtonClick}>Add {incrementBy}</button>
  </>)
}

const root = document.querySelector('#react-root')


//? Sample Usage

render(<>
  <Counter incrementBy={1} />
  <Counter incrementBy={5} />
  <Counter incrementBy={2} />
</>, root)

//---------------------------------------------------------

//* Admin permission

//? NoPermission.js

import React from 'react';

const NoPermission = () => {
  return (<>
    <h3>Not allowed</h3> 
    <p>
      You do not have permission to access this page. <br />
      Please contact your account manager
    </p>
  </>)
}

export default NoPermission

//?index.js

import React from 'react'
import {render} from 'react-dom'
import NoPermission from './NoPermission.js'

const Admin = ({userType}) => {
  if (userType === 'client') {
    return <NoPermission />
  }
  
  return ( <>
    <h2>Welcome Admin</h2> 
    <p>The Admin portal allows you to manage all your items</p>
  </>)
}

//? Sample usage

render(<>
<Admin userType='admin' />
<Admin userType='client' />
</>, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Dashboard

import React from 'react'
import {render} from 'react-dom'

const Dashboard = ({loggedIn}) => {
  const isLoggedIn = <h1>Welcome back!</h1>
  const notLoggedIn = <h1>Welcome.</h1>

  return <div className="container">{loggedIn ? isLoggedIn : notLoggedIn }</div>
}

render(<>
  <Dashboard loggedIn={true} />
  <Dashboard loggedIn={false} />
</>, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Navbar notifications

import React from 'react'
import {render} from 'react-dom'

const Navbar = ({notifications}) => {
  return <>
    <h2>Welcome user</h2> 
    {notifications.length > 0 && <p>You've got {notifications.length} notifications</p>}
  </>
}

//? Sample usage

const notifications = [{
  id: 1,
    text: "Welcome to our supermarket"
}, {
    id: 2,
    text: "Your order has shipped"
}, {
    id: 3,
    text: "Your order has shipped"
}];
render(<>
    <Navbar notifications={[]} />
    <Navbar notifications={notifications} />
</>, document.querySelector("#react-root"));


//---------------------------------------------------------

//* My first Online Store

//? index.js

import React, {useState} from 'react'
import {render} from 'react-dom'
import StoreFront from './StoreFront.js'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  function handleLoginClick() {
    setIsLoggedIn(true)
  }
  
  function handleLogoutClick() {
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
      return (<>
        <h2>Please login</h2> 
        <button onClick={handleLoginClick}>Login</button>
      </>) 
    }

  return (<>
    <StoreFront />
    <button onClick={handleLogoutClick}>Logout</button>
  </>) 
}

render(<App />, document.querySelector('#react-root'))

//? Product.js

const Product = ({details}) => {
  const [counter, setCounter] = useState(0)

  function handleIncrementClick() {
      setCounter(counter + 1)
  }
  
  function handleDecrementClick() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (<div>
    <img src={details.image} alt={details.name} />
    <div>
      <h2>{details.name}</h2> 
      <p>{details.description}</p>
    </div>
    <div>
      <button onClick={handleDecrementClick} disabled={count === 0}>-</button>
      <h3>{count ? count : ""}</h3>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  </div>)
}

export default Product

//? StoreFront.js
  
import Product from './Product.js'

const StoreFront = () => {

  const products = [{
    name: 'Cheese',
    description: '200g cheese block',
    image: 'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png'
  }, {
    name: 'Milk',
    description: '1L of milk',
    image: 'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png'
  }]

  return (<div>
    <Product details={products[0]} /> 
    <Product details={products[1]} />
  </div>)
}

export default StoreFront 

//---------------------------------------------------------

//* Countdown with lives

import React, {useState} from 'react';
import {render} from 'react-dom'

const Countdown = () => {
  const [attempts, setAttempts] = useState(5)
  const [lives, setLives] = useState(3)

  function handleCountClick() {
    if (attempts > 0) {
      setAttempts(attempts - 1)
    } else if (attempts === 0) {
      setAttempts(5)
      setLives(lives - 1)
    }
  }

  return (<>
    <h2>Attempts remaining: {attempts}</h2> 
    <button onClick={handleCountClick} disabled={attempts === 0 && lives === 0}>Count down</button>
    <h3>Lives remaining: {lives}</h3>
  </>)
}


//---------------------------------------------------------

//* Conditional counter

import React, {useState} from 'react'
import {render} from 'react-dom'

const Counter = ({enabled}) => {
  const [count, setCount] = useState(5)

  function handleDecrementClick() {
    if (enabled){
      setCount(count - 1)
    }    
  }

  return (<>
    <h2>Attempts remaining: {count}</h2> 
    <button onClick={handleDecrementClick} disabled={count === 0}>Count down</button>
  </>)
}

//? Sample usage

render(<>
  <Counter enabled={true} />
  <Counter enabled={false} />
</>, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Fake React implementation

import {useState} from 'react'

const WrongComponent = () => {
  const [data, setData] = useState([])

  data.push(5)
  setData(data)
}

const CorrectComponent = () => {
  const [data, setData] = useState([])

}


//---------------------------------------------------------

//* Immutable Add I

const addApp = (apps, app) => {
  return [...apps, app]
}

//* Sample usage

const apps1 = ["Calculator", "Phone"]
const newApps1 = addApp(apps1, "Preferences")
console.log(newApps1)

//  check if the operation was immutable 
console.log(newApps1 === apps1)
// immutable when it returns false

const app2 = ["Twitter", "Instagram"]
const newApp2 = addApp(app2, "Facebook")
console.log(newApp2)

//---------------------------------------------------------

//* Immutable Add II

const addApp = (apps, app) => {
  return [app, ...apps]
}

//* Sample usage

const cryptos = ["BTC", "ETH", "LINK"]
const addCrypto = addApp([...cryptos], "ADA")

console.log(addCrypto)
//---------------------------------------------------------

//* Immutable Update

const replaceApp = (apps, oldApp, newApp) => {
  console.log(apps)
  return apps.map(app => {
    if (app === oldApp) {
      return newApp
    }
    return app
  })
}

//? Sample usage
const apps1 = ["Calculator", "Whatsapp"];
// Replace Calculator with Phone
const newApps1 = replaceApp(apps1, "Calculator", "Phone");
console.log(newApps1);
// check if the operation was immutable
console.log(newApps1 === apps1); // immutable when it returns false

const apps2 = ["Whatsapp", "Calculator"];
// Replace Whatsapp with Maps
const newApps2 = replaceApp(apps2, "Whatsapp", "Maps");
console.log(newApps2);
// check if the operation was immutable
console.log(newApps2 === apps2); // immutable when it returns false

//---------------------------------------------------------

//* Immutable Remove

const removeApp = (apps, appToRemove) => {
  return apps.filter(app => {
     console.log(app) 
     return app !== appToRemove
  })
}

// Sample usage
const apps1 = ["Calculator", "Phone"];
// Remove Calculator
const newApps1 = removeApp(apps1, "Calculator");
console.log(newApps1);
// check if the operation was immutable
console.log(newApps1 === apps1); // immutable when it returns false

const apps2 = ["Whatsapp", "Maps", "Calculator"];
// Remove Maps
const newApps2 = removeApp(apps2, "Maps");
console.log(newApps2);
// check if the operation was immutable
console.log(newApps2 === apps2); // immutable when it returns false

//---------------------------------------------------------

//* List Apps

import React from 'react'
import {render} from 'react-dom'

const Apps = ({items}) => {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}

//? Sample usage

const apps = ['calculator', 'Phone', 'Message', 'Maps']
render(<Apps items={apps} />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* List Products

import React, {useState} from 'react'
import {render} from 'react-dom'

const Products = () => {
  const [products, setProducts] = useState(['Almond', 'Cashew', 'Rice', 'Water'])

  return (
    <ul>
      {products.map((product, index) => <li key={index}>{product}</li>)}
    </ul>
  )
}

render(<Products />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Shopping Wallet

import React, {useState} from 'react'
import {render} from 'react-dom'

const Wallet = () => {
  const [transactions, setTransactions] = useState([])


  function handleDepositClick() {
    setTransactions([...transactions, 10])
  }

  function handleWithdrawClick() {
    setTransactions([...transactions, -10])
  }

  function handleResetClick() {
    setTransactions([])
  }

  return(
    <>
      <button onClick={handleDepositClick}>Deposit 10</button>
      <button onClick={handleWithdrawClick}>Withdraw 10</button>
      <h2>Total: {transactions.reduce((transaction, current) => transaction += current, 0)}</h2>  
      <button onClick={handleResetClick}>Reset</button>
      <ul>
        {transactions.map((transaction, index) => <li key={index}>{transaction}</li>)}
      </ul>
    </>
  )
}

render(<Wallet />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Undo action

import React, {useState} from 'react'
import {render} from 'react-dom'

const Wallet = () => {
  const [transactions, setTransactions] = useState([])

  function handleDepositClick() {
    setTransactions([...transactions, transactions.length + 1])
  } 

  function handleUndoClick() {
    setTransactions(transactions.slice(0, transactions.length - 1))
  }

  return (
    <>
      <button onClick={handleDepositClick}>Deposit</button>
      <button onClick={handleUndoClick}>Undo</button>
      <ul>
        {transactions.map((transaction, index) => <li key={index}>{transaction}</li>)}
      </ul>
    </>
  )
}

render(<Wallet />, document.querySelector('#react-root'))

//---------------------------------------------------------

//* Attach User Type

const attachUserType = (user, type) => {
  return {...user, type: type}
}

//? Sample usage
const user1 = {
  name: 'Tylor',
  has_paid: true
}
const newUser1 = attachUserType(user1, "admin")
// check if the operation was immutable
console.log(newUser1 === user1)
// immutable when it returns false

//---------------------------------------------------------

//* Attach Timestamps

const attachTimestamps= (user) => {
  return {...user, created_at: new Date(), updated_at: new Date()}
}

//? Sample usage
const testUser = {
  id: 29,
  name: 'Tylor',
  type: 'admin'
}

const newUser = attachTimestamps(testUser)
console.log(newUser)

//---------------------------------------------------------

//* Make Admin

const makeAdmin = (user) => {
   return {...user, type: 'admin'} 
}

//? Sample usage
const user1 = {
  name: 'Sam',
  type: 'member'
}

const newUser1 = makeAdmin(user1)
console.log(newUser1)

//---------------------------------------------------------

//* Remove ID

const removeId = (user) => {
  const {id, ...rest} = user
  return rest
}

//? Sample usage

const user1 = {
  id: 1, 
  name: 'Sam',
  type: 'member'
}

const newUser1 = removeId(user1)

//---------------------------------------------------------

//* Dark mode toggle

import React, {useState} from 'react'
import {render} from 'react-dom'

const App = () => {
  const [settings, setSettings] = useState({
    title: 'Content here',
    dark_theme: true
  })

  function handleToggleClick() {
    setSettings({...settings, dark_theme: !settings.dark_theme})
  }
  const className = settings.dark_theme ? "dark" : "light"

  return(
    <div className={className}>
       <h1>{settings.title}</h1> 
       <button onClick={handleToggleClick}>Toggle theme</button>
    </div>
  )
}

//---------------------------------------------------------

//* Person age

import React, {useState} from "react"
import {render} from "react-dom"

const Person = () => {
  const [user, setUser] = useState(sampleUser)

  function handleIncrementClick() {
    setUser({...user, age: user.age + 1})
  }

  function handleResetClick() {
    setUser(sampleUser)
  }
  

  return (
    <>
     <p>{user.first_name} is {user.age} years old</p>
      <button onClick={handleIncrementClick}>Increment age</button>
      <button onClick={handleResetClick}>Reset</button>
    </>
  )
}

const sampleUser = {
    id: 1,
    first_name: "Tylor",
    age: 26
}

render(<Person />, document.querySelector("#react-root"))

 
//---------------------------------------------------------

//* Order insurance

import React, {useState} from 'react'
import {render} from 'react-dom'

const OrderInsurance = () => {
  const [order, setOrder] = useState({
    id: 1,
    items: [1, 4, 10]
  })

  function handleAddClick() {
    setOrder({...order, insurance: "basic"})
  }

  function handleRemoveClick() {
    const {insurance, ...modifiedOrder} = order
    setOrder(modifiedOrder)
  }

  return (
    <>
      <h1>Your order</h1>
      {order.insurance ? <p>Order is insured</p> : <p>Order is not insured</p>}
      <button disabled={order.insurance === "basic"} onClick={handleAddClick}>Add insurance</button>
      <button disabled={order.insurance === undefined} onClick={handleRemoveClick}>Remove insurance</button>
    </>
  )
}

render(<OrderInsurance />, document.querySelector("#react-root"))

//---------------------------------------------------------

//* User age

import React from 'react'
import {render} from 'react-dom'

const User = ({age}) => {
  return <form>
    <input type="number" defaultValue={age} name />
  </form>
}

render(<>
  <User age={26} />
  <User age={23} />
</>, document.querySelector("#react-root"))


//---------------------------------------------------------

//* Log the name

import React from 'react'
import {render} from 'react-dom'

const Checkout = () => {
  return (
    <form>
      <input type="text" name="name" onChange={event => console.log(event.target.value)} />
    </form>
  )
}

render(<Checkout />, document.querySelector("#react-root"))

//---------------------------------------------------------

//* Controlled input I

import React, {useState} from "react"
import {render} from "react-dom"

const App = () => {
  const [text, setText] = useState("")

  return(
    <>
       <input type="text" name="name" value={text} onChange={event => setText(event.target.value)}/>        
      <p>Hello {text}</p>
    </>
  )
}

render(<App />, document.querySelector("#react-root"))

//---------------------------------------------------------

//* Controlled input II

import React, {useState} from "react"
import {render} from 'react-dom'

const App = () => {
  const [quantity, setQuantity] = useState(0)

  return (
    <>
      <input type="text" name="name" value={quantity} onChange={event => setQuantity(event.target.value)} />
      <p>Ordering {quantity} items</p>
    </>
  )
}

render(<App />, document.querySelector("#react-root"))

//---------------------------------------------------------

//* Registration form 

import React, {useState} from "react"
import {render} from "react-dom"

const RegisterForm = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [motivation, setMotivation] = useState("")

    return <form>
      <input type="text" name="name" value={name} placeholder="Enter your name" onChange={e => setName(e.target.value)}/>
      
      <select name="type" value={type} defaultValue="Type" onChange={e => setType(e.target.value)}>
        <option value="Choose a type">Choose a type</option>
        <option value="client">client</option>
        <option value="merchant">merchant</option>
      </select>
      
      <textarea name="motivation" value={motivation} placeholder="Your motivation to join"  onChange={e => setMotivation(e.target.value)} />
     
      <input type="submit" name="register" value="Register" />
      
      <p>Your name is {name}. You would like to register as {type} because {motivation}.</p>
    </form>
}

render(<RegisterForm />, document.getElementById("react-root"))

//---------------------------------------------------------

//* Accessible Form II

import React, {useState} from "react"
import {render} from "react-dom"

const RegisterForm = () => {
  const [text, setText] = useState("")
  const [type, setType] = useState("")
  const [motivation, setMotivation] = useState("")

  return(<> <form >
    <label htmlFor="text">Name: </label>
    <input type="text" id="text" value={text} placeholder="Enter your name" onChange={e => setText(e.target.value)} />
    <label htmlFor="type">Type: </label>
    <select name="type" id="type" value={type} onChange={e => setType(e.target.value)}>
      <option value="">Choose a type</option>
      <option value="merchant">merchant</option>
      <option value="client">client</option>
    </select>
    <label htmlFor="motivation">Motivation: </label>
    <textarea name="motivation" id="motivation" placeholder="Your motivation to join" value={motivation} onChange={e => setMotivation(e.target.value)} />
    <input type="submit" value="Register" />
  </form> 
  <p>Your name is {text}. You would like to register as {type} because {motivation}.</p> </>)
}

render(<RegisterForm />, document.getElementById("react-root"))


//---------------------------------------------------------

//* Online Store Admin

//? index.js

import React, {useState} from "react"
import {render} from "react-dom"
import StoreFront from "./StoreFront.js"

const App = () => {
  return <StoreFront /> 
}

render(<App />, document.querySelector("#react-root"))

//? Product.js

//? StoreFront.js

import React, {useState} from "react"
import Product from "./Product.js"

const StoreFront = () => {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [validation, setValidation] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()

    if(!name && !description) {
      setValidation("Please enter your name and description")
      return
    }
    if(!name) {
      setValidation("Please enter your name")
      return 
    }
    if(!description) {
      setValidation("Please enter your description")
      return
    }

    setProducts([...products, {
      id: products.length + 1,
      name,
      description
    }])

    setName("")
    setDescription()
  }

  function handleDeleteButton(deleteId) {
    setProducts(products.filter(product=> product.id !== deleteId))
  }

  return(<>
    <form>
      <div>
        <label htmlFor="name-form">Name:</label>
        <input type="text" id="name-form" placeholder="Enter the name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description-form">Description:</label>
        <input type="text" id="description-form" placeholder="Enter the description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="form-footer">
        <div className="validation-message">{validation}</div>
        <button type="submit" onClick={handleFormSubmit}>Add Product</button>
      </div>
    </form> 
    <div>Add your first product</div>
    <ul>
      {products.map(product => <li key={product.id}>
        <Product details={product}/>
        <button onClick={() => handleDeleteButton(product.id)}>Delete</button>
      </li>)}
    </ul>
  </>)
}


//---------------------------------------------------------

//* Passing Functions 

//? index.js

import React from 'react'
import {render} from 'react-dom'
import Card from './Card.js'

const App = () => {

  function handleCardLoad() {
    console.log("Card has loaded")
  }

  return <Card onCardLoad={handleCardLoad} />
}

render(<App />, document.querySelector("#react-root"))

//? Card.js

import React from 'react'

const Card = (props) => {
  if (props.onCardLoad) {
    props.onCardLoad()
  }

  return <div className={"card"}>Card content here</div>
}

//---------------------------------------------------------

//* Calling passed functions

//? index.js
import React from "react"
import {render} from "react-dom"
import Card from "./Card.js"

const App = () => {

  function handleCardClick() {
    console.log("Card got clicked")
  }

  return <Card onCardClick={handleCardClick} />
}

render(<App />, document.getElementById("react-root"))

//? Card.js
import React from "react"

const Card = ({onCardClick}) => {
  return <div>
    <button onClick={onCardClick}>Click me</button>
  </div>
}

export default Card

//---------------------------------------------------------

//* Refactoring Form I

import React, {useState} from "react"
import {render} from "react-dom"
import EmailForm from "./EmailForm.js"

const App = () => {
  const [email, setEmail] = useState("")

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  return(
    <div>
      <h2>Logged in as {email}</h2>
      <EmailForm email={email} onEmailChange={handleEmailChange} />
    </div>
  )
}

render(<App />, document.querySelector("#react-root"))

//? EmailForm.js

import React from "react"

const EmailForm = ({email, onEmailChange}) => {
  return ( 
    <form>
      <label htmlFor="email-form">Email: </label>
      <input type="email" id="email-form" value={email} onChange={onEmailChange} />
    </form>
  )
}

export default EmailForm