import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../../../pages/Cart';
//import {Container} from '../index'

export default function Header() {


  const {carts} = useSelector((state)=>state.allCart);

    const navigate = useNavigate()

    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Blog",
        slug: "/blog",
        active: true,
    },
    {
        name: "Contact",
        slug: "/contact",
        active: true,
    },
    {
        name: "About us",
        slug: "/aboutus",
        active: true,
    },
    {
        name: "Shop",
        slug: "/shop",
        active: true,
    },
]
  return (
<>
  <div className="py-1 bg-black ">
    <div className="container">
        <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
                <div className="row d-flex">
                    <div className="col-md pr-4 d-flex topper align-items-center">
                        <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                        <span className="text">+ 1235 2355 98</span>
                    </div>
                    <div className="col-md pr-4 d-flex topper align-items-center">
                        <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                        <span className="text">youremail@email.com</span>
                    </div>
                    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                        <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="http://localhost:3000/">E-commerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          {
            navItems.map((item) => 
            item.active ? (
                <li className="nav-item" key={item.name}>                     
                    <button onClick={() => navigate(item.slug)} className='nav-link'>{item.name}</button>
                </li>
            ) : null
          )}
           
            <li className="nav-item cta cta-colored">
            <Link to="/cart"> <span className="icon-shopping_cart"></span>{carts.length}</Link>
            </li>
          
        </ul>
      </div>
    </div>
  </nav>
</>
  )
}
