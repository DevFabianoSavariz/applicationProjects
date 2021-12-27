import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';

export default function App(){
return (
<BrowserRouter>
<header className="Header">
  <a><Link to="/"> React App </Link></a>
</header>

<section className="Section">
    <div class="section-container">
        <Route path="/" exact component={ Home }></Route>
        <Route path="/company" component={ Company }></Route>
        <Route path="/contact" component={ Contact }></Route>
    </div>
</section>

<footer className="Footer">
</footer>
</BrowserRouter>
);
}