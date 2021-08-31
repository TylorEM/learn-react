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