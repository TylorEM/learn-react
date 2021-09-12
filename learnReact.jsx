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


