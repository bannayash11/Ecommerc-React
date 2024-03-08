
import { addToCart , buynow } from '../../Redux/app/features';
import { removeToCart } from '../../Redux/app/features';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Checkout from '../../pages/Checkout';
import { toast } from 'react-toastify';
import axios from 'axios'

export default function ProductList() {
	const [data, setData] = useState([]);

	const {carts} =useSelector ((state)=>state.allCart);

	const cartId = carts.length >0 ? carts.map(item=>{
		return item?.id
	}):[]




    const dispatch = useDispatch();



	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get('http://localhost:3001/productlist');
			setData(response.data);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchData();
	}, []); 

   
    const send = (e)=>{
        dispatch(addToCart(e)) 
		console.log("success")
        toast.success("Item added In Your Cart")
    }
     
    const handleDecrement = (e)=>{
        dispatch(removeToCart(e));
        toast.success("Item Remove From Your Cart")
		console.log("remove success")
    }


	const navigate = useNavigate();

	const handleBuyNow = (ee) => {
		if (ee) {	
		  dispatch(buynow(ee));  
		 // console.log(  dispatch(buynow(ee)));
		  navigate(`/Checkout/${ee.id}`);
		//   navigate(`/Checkout/`);
		} else {
		  console.error('Product not available.');
		}
	  };
	  
return (
<>

<section className="ftco-section bg-light">
    	<div className="container">
				<div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">New Shoes Arrival</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>   		
    	</div>
    	<div className="container">
    		<div className="row">
			{data.map((item) => (
				
    			<div className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex"  key={item.id}>
					
						
					<div className="product d-flex flex-column">
					<Link to={`/product/${item.id}`}>
    					<a href="#" className="img-prod">
					<img className="img-fluid" src={require(`../../assets/images${item.productimage}`)} alt="Colorlib Template"/>

    						<div className="overlay"></div>
    					</a>
						</Link>
    					<div className="text py-3 pb-4 px-3">
    						<div className="d-flex">
    							<div className="cat">
		    						<span>{item.productdiscategory}</span>
		    					</div>
		    					<div className="rating">
	    							<p className="text-right mb-0">
									{Array.from({ length: item.rating }).map((_, index) => (
								            <span key={index}>⭐</span>
									))}
	    							</p>
	    						</div>
	    					</div>
    						<h3><a href="#">{item.productname}</a></h3>
    						<div className="pricing">
								<p className="price">
									<span className="mr-2 price-dc">{item.productsaleprice}</span>
									<span className="price-sale">{item.productdiscountprice}</span>
								</p>

	    					</div>

	    					<p className="bottom-area d-flex px-3">
							<button className="add-to-cart text-center py-2 mr-1" onClick={!cartId?.includes(item?.id)? ()=>send(item):()=>handleDecrement(item.id)}>
								<span> {!cartId?.includes(item?.id)?'Add To Cart':"Remove Cart"}<i className="ion-ios-add ml-1"></i></span>    
				            </button>           
							<button onClick={()=>handleBuyNow(item)}>Buy Now</button>   			
    						</p>
    					</div>
    				</div>
					
    			</div>
				
			))}
    		</div>
    	</div>
    </section>
</>
  )
}
