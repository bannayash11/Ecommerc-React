import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Testimony() {
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/clientreview');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3002/serviceprovide');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
    fetchServices();
  }, []);

  return (
    <>
      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="services-flow">
                {services.map((serviceitem) => (
                  <div className="services-2 p-4 d-flex ftco-animate" key={serviceitem.id}>
                    <div className="icon">
                      <span className={serviceitem.icon}></span>
                    </div>
                    <div className="text">
                      <h3>{serviceitem.title}</h3>
                      <p className="mb-0">{serviceitem.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="heading-section ftco-animate mb-5">
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              </div>
              <div className="carousel-testimony owl-carousel ftco-animate">
                {data.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="testimony-wrap">
                      <div className="user-img mb-4" style={{ backgroundImage: `url(${item.reviewimage})` }}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4 line">{item.reviewmessage}</p>
                        <p className="name">{item.fullname}</p>
                        <span className="position">{item.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
