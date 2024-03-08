import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, emptycartIteam, removeSingleIteams, removeToCart } from '../../Redux/app/features';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {

	
		const {carts} =useSelector ((state)=>state.allCart);
	

		const [totalprice,setPrice] = useState(0);
		const [totalquantity,setTotalQuantity] = useState(0);

		const dispatch = useDispatch();


		// empty cart
		const emptycart = ()=>{
			dispatch(emptycartIteam())
			//toast.success("Your Cart is Empty")

		}

		// remove to cart
		const handleDecrement = (e)=>{
			dispatch(removeToCart(e));
			//toast.success("Item Remove From Your Cart")
		}

		// add single item cart
		const handleIncrement = (e)=>{
			dispatch(addToCart(e))
		}

		// remove single item 
		const handleSingleDecrement = (e)=>{
			dispatch(removeSingleIteams(e))
		}

		// count total price
		const total = ()=>{
			let totalprice = 0
			carts.map((ele,ind)=>{
				totalprice = ele.price * ele.qnty + totalprice
			});
			setPrice(totalprice)
		}  


		// count total quantity
		const countquantity = ()=>{
			let totalquantity = 0
			carts.map((ele,ind)=>{
				totalquantity = ele.qnty + totalquantity
			});
			setTotalQuantity(totalquantity)
		}  

		useEffect(()=>{
			total()
		},[total])

		useEffect(()=>{
			countquantity()
		},[countquantity])

		let productTotal;
		let totalQuantity = 0;
  return (
    <>
  <div className="hero-wrap hero-bread" style={{ backgroundImage: `url(${require('../../assets/images/bg_6.jpg')}`}}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
            <h1 className="mb-0 bread">My Wishlist</h1>
          </div>
        </div>
      </div>
  </div>
  <section className="ftco-section ftco-cart">
		<div className="container">
			<div className="row">
    		<div className="col-md-12 ftco-animate">
    			<div className="cart-list">
	   				<table className="table">
					    <thead className="thead-primary">
					      <tr className="text-center">
					        <th>&nbsp;</th>
					        <th>&nbsp;</th>
					        <th>Product</th>
					        <th>Price</th>
					        <th>Quantity</th>
					        <th>Total</th>
					      </tr>
					    </thead>
					<tbody>						     					    
					{carts.map((data,index)=>{
						productTotal = data.qnty * data.productdiscountprice;
						totalQuantity += data.qnty;
                        return (
                            <tr className="text-center" key={index}>
								<td className="product-remove">
									<button className="canclebutton" onClick={()=>handleDecrement(data.id)}>
										<span className="ion-ios-close"></span>
									</button>
								</td>  	
						        <td className="image-prod">	
									<Link to={`/product/${data.id}`}>			
									<div className="img" style={{ backgroundImage: `url(${require("../../assets/images"+ data.productimage)})`}}></div>
									</Link>
								</td>
								<td className="product-name">
									<Link to={`/product/${data.id}`}>
						        	<h3>{data.productname}</h3>
						        	<p>{data.productdescription}</p>
									</Link>
						        </td>
                                <td className="price">{data.productdiscountprice}</td>
                                <td>
                                    <div className="prdct-qty-container">
                                        <button className='prdct-qty-btn' type='button' 
                                        onClick={data.qnty <=1 ?()=>handleDecrement(data.id) :()=>handleSingleDecrement(data)}>
                                            -
                                        </button>
                                        <input type="text" className='qty-input-box' value={data.qnty} disabled name="" id="" />
                                        <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(data)}>
                                           +
                                        </button>
                                    </div>
                                </td>
								<td className="total">{data.qnty * data.productdiscountprice}</td>
                            </tr>      
                            )
                        })
                    }			     
					</tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		<div className="row justify-content-start">
    			<div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
    				<div className="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<hr />
    					<p className="d-flex total-price">
    						<span>Total Price : </span>
    						<span>${productTotal}</span>
    					</p>
    					<hr />
    					<p className="d-flex total-price">
    						<span>Total Quantity : </span>
    						<span>{totalQuantity}</span>
    					</p>
    				</div>
    				<p className="text-center">
						<Link to={'/checkout'} className="btn btn-primary py-3 px-4">Proceed to Checkout</Link>
					</p>
    			</div>
    		</div>
			</div>
		</section>
    </>
  )
}