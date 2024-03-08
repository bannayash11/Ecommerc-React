import Instragrampost from '../components/socialmedia/Instragrampost'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaymentForm from '../components/payment/PaymentForm';
import { useParams } from "react-router-dom";

//import { useHistory } from 'react-router-dom';



export default function Checkout() {


    const dispatch = useDispatch();

  
    const { carts: cartData } =useSelector ((state)=>state.allCart);
    const [fetchedCartData, setFetchedCartData] = useState();
    const [error, setError] = useState(null);
  

    const handlePlaceOrder = () => {
    //  history.push('/order-confirmation');
    };

	const { id } = useParams();

	
    useEffect(() => {
		const fetchData = async () => {
		  try {
			const data = await new Promise((resolve) =>
			  setTimeout(() => resolve({ items: cartData }), 1000)
			);
	
			setFetchedCartData(data.items);
		  } catch (error) {
			setError(error.message);
		  }
		};
	
		fetchData();
	  }, [cartData]);


	 let totalPrice; 
  return (
    <>
   

  <div className="hero-wrap hero-bread"  style={{ backgroundImage: `url(${require('../assets/images/bg_6.jpg')}`}}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Checkout</span></p>
            <h1 className="mb-0 bread">Checkout</h1>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 ftco-animate">
				<form action="#" className="billing-form">
				<h3 className="mb-4 billing-heading">Billing Details</h3>
	          	<div className="row align-items-end">
	          		<div className="col-md-6">
						<div className="form-group">
							<label for="firstname">Firt Name</label>
							<input type="text" className="form-control" placeholder="" />
						</div>
	              </div>
					<div className="col-md-6">
						<div className="form-group">
							<label for="lastname">Last Name</label>
							<input type="text" className="form-control" placeholder="" />
						</div>
					</div>
					<div className="w-100"></div>
						<div className="col-md-12">
							<div className="form-group">
								<label for="country">State / Country</label>
								<div className="select-wrap">
							<div className="icon"><span className="ion-ios-arrow-down"></span></div>
							<select name="" id="" className="form-control">
								<option value="">France</option>
								<option value="">Italy</option>
								<option value="">Philippines</option>
								<option value="">South Korea</option>
								<option value="">Hongkong</option>
								<option value="">Japan</option>
							</select>
							</div>
						</div>
					</div>
					<div className="w-100"></div>
					<div className="col-md-6">
						<div className="form-group">
							<label for="streetaddress">Street Address</label>
							<input type="text" className="form-control" placeholder="House number and street name" />
						</div>
					</div>
					
					<div className="col-md-6">
						<div className="form-group">
						<input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)" />
						</div>
					</div>
					
					<div className="w-100"></div>
					<div className="col-md-6">
						<div className="form-group">
							<label for="towncity">Town / City</label>
							<input type="text" className="form-control" placeholder="" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label for="postcodezip">Postcode / ZIP *</label>
							<input type="text" className="form-control" placeholder="" />
						</div>
					</div>
					
					
					<div className="w-100"></div>
					<div className="col-md-6">
						<div className="form-group">
							<label for="phone">Phone</label>
							<input type="text" className="form-control" placeholder="" />
						</div>
					</div>


					<div className="col-md-6">
						<div className="form-group">
							<label for="emailaddress">Email Address</label>
						<input type="text" className="form-control" placeholder="" />
						</div>
					</div>
				
					<div className="w-100"></div>
					<div className="col-md-12">
						<div className="form-group mt-4">
							<div className="radio">
								<label className="mr-3"><input type="radio" name="optradio" /> Create an Account? </label>
								<label><input type="radio" name="optradio" /> Ship to different address</label>
							</div>
						</div>
					</div>
				</div>
            	</form> 

	        <div className="row mt-5 pt-3 d-flex">
	          	<div className="col-md-6 d-flex">
	          		<div className="cart-detail cart-total bg-light p-3 p-md-4">
						<p className="d-flex total-price">

					{ error ? (
					        <p>Error fetching cart data: {error}</p>
						    ) : fetchedCartData ? (
					        <div>
							<h3>Cart Items:</h3>
								<ul>
									{fetchedCartData.map((item, index) => {
										totalPrice = item.productsaleprice * item.qnty; // Calculate total price for each product
										return (
											<li key={index} className='checkoutbox'>
												<img src={require(`../assets/images${item.productimage}`)} alt={`Product ${item.productname}`} />
												<div className='checkbox-detailbox'>
													<span>{item.productname}</span>
													<span>{item.productsaleprice} x {item.qnty}</span>
													<span>${totalPrice}</span> {/* Display total price for each product */}
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						) : (<p>Loading cart data...</p>)
					}

							</p>
							<h3 className="billing-heading mb-4">Cart Total</h3>
								<p className="d-flex">
									<span>Subtotal</span>
									<span>$ {fetchedCartData ? fetchedCartData.reduce((acc, item) => acc + item.productsaleprice * item.qnty, 0) : 0}</span>
								</p>
								<p className="d-flex">
									<span>Delivery</span>
									<span>$0.00</span>
								</p>
								<p className="d-flex">
									<span>Total Quantity</span>
									<span>{fetchedCartData ? fetchedCartData.reduce((acc, item) => acc + item.qnty, 0) : 0}</span>
								</p>
								<p className="d-flex">
									<span>Total Price</span>
									<span>$ {fetchedCartData ? (fetchedCartData.reduce((acc, item) => acc + item.productsaleprice * item.qnty, 0) * 0.97).toFixed(2) : 0}</span>
								</p>
					</div>
	          	</div>
	          	<div className="col-md-6">
					<div className="cart-detail bg-light p-3 p-md-4">
					<h3 className="billing-heading mb-4">Payment Method</h3>
						<div className="form-group">
							<div className="col-md-12">
								<div className="radio">
									<label><input type="radio" name="optradio" className="mr-2" /> Direct Bank Tranfer</label>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
								<div className="radio">
									<label><input type="radio" name="optradio" className="mr-2" /> Check Payment</label>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
								<div className="radio">
									<label><input type="radio" name="optradio" className="mr-2" /> Paypal</label>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
								<div className="checkbox">
									<label><input type="checkbox" value="" className="mr-2" /> I have read and accept the terms and conditions</label>
								</div>
							</div>
						</div>
						<p><a href="#"className="btn btn-primary py-3 px-4">Place an order</a></p>
					</div>
	          	</div>
	          </div>
          </div>
        </div>
      </div>
    </section>
    <Instragrampost />

    </>

)
}
