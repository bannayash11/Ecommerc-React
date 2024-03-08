import React from 'react'
import Instragrampost from '../components/socialmedia/Instragrampost'
import Testimony from '../components/CustomerReview/Testimony'

export default function Aboutus() {
  return (
<>
<div className="hero-wrap hero-bread" style={{ backgroundImage: `url(${require('../assets/images/bg_6.jpg')}`}}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
            <h1 className="mb-0 bread">About Us</h1>
          </div>
        </div>
      </div>
    </div>

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

    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
			<div className="container">
				<div className="row">
					<div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${require('../assets/images/about.jpg')}`}}>
						<a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span className="icon-play"></span>
						</a>
					</div>
					<div className="col-md-7 py-md-5 wrap-about pb-md-5 ftco-animate">
	          <div className="heading-section-bold mb-4 mt-md-5">
	          	<div className="ml-md-0">
		            <h2 className="mb-4">Stablished Sinced 1975</h2>
	            </div>
	          </div>
	          <div className="pb-md-5 pb-4">
							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
							<p><a href="#" className="btn btn-primary">Shop now</a></p>
						</div>
					</div>
				</div>
			</div>
		</section>
    <Testimony />
    <Instragrampost/>
  </>
  )
}
