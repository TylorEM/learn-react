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

//---------------------------------------------------------