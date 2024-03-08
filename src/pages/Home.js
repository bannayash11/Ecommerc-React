import React from 'react'
import ProductList from '../components/product/ProductList'
import Offerandcategory from '../components/Offerandcategory/Offerandcategory'
import Testimony from '../components/CustomerReview/Testimony'
import Dealofthemonth from '../components/Deals/Dealofthemonth'
import Instragrampost from '../components/socialmedia/Instragrampost'

export default function Home() {

  return (
    <>
 <section id="home-section" className="hero">
		  <div className="home-slider owl-carousel">
	      <div className="slider-item js-fullheight">
	      	<div className="overlay"></div>
	        <div className="container-fluid p-0">
	          <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
	          	<img className="one-third order-md-last img-fluid" src="https://freepngimg.com/download/sports_activities/27820-4-sport-man.png" alt=""/>
		          <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
		          	<div className="text">
		          		<span className="subheading">#New Arrival</span>
		          		<div className="horizontal">
				            <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
				            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
				            
				            <p><a href="#" className="btn-custom">Discover Now</a></p>
				          </div>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>
	    </div>
    </section>

    <section className="ftco-section ftco-no-pt ftco-no-pb">
			<div className="container">
				<div className="row no-gutters ftco-services">
          <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-bag"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Free Shipping</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>      
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-customer-service"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Support Customer</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>    
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-payment-security"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Secure Payments</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>      
          </div>
        </div>
			</div>
		</section>



<ProductList/>
<Offerandcategory/>

<Dealofthemonth/>
<Testimony/>
<Instragrampost/>
    </>
    )
}
