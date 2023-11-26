import React from 'react';
import Header from './nav';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import About from './aboutus';
import Footer from './footer';
const Main=()=>{
return(
    <div>
<Header/>
<div class="banner">
    <video width="100%"  autoPlay muted loop>
                <source src="banner.mp4" height="30%" type="video/mp4" />
            </video>
        <Link to="login" class="fs-4 text-decoration-none btnread btn-rounded">Get Started</Link>
    </div>


    <div class="container mt-4">
        <div class="text-center mb-2-8 mb-lg-6">
            <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong class="text-primary font-weight-700">Us</strong></h2>
            <span>The trusted source for why choose us</span>
        </div>
        <div class="row align-items-center">
            <div class="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                <div class="pr-md-3">
                    <div class="text-center text-sm-right mb-2-9">
                        <div class="mb-4">
                            <img src="about1.jpg" alt="..." class="rounded-circle"/>
                        </div>
                        <h4 class="sub-info">Consultancy</h4>
                        <p class="display-30 mb-0">Roin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                    </div>
                    <div class="text-center text-sm-right">
                        <div class="mb-4">
                            <img src="about2.jpg" alt="..." class="rounded-circle"/>
                        </div>
                        <h4 class="sub-info">Website provider</h4>
                        <p class="display-30 mb-0">Gravida roin nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-none d-lg-block">
                <div class="why-choose-center-image">
                    <img src="about3.jpg"  height="350px" width="350px" alt="..." class="rounded-circle"/>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="pl-md-3">
                    <div class="text-center text-sm-left mb-2-9">
                        <div class="mb-4">
                            <img src="about4.jpg" alt="..." class="rounded-circle"/>
                        </div>
                        <h4 class="sub-info"> services</h4>
                        <p class="display-30 mb-0">Nibh roin gravida vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                    </div>
    
                    <div class="text-center text-sm-left">
                        <div class="mb-4">
                            <img src="about5.jpg" alt="..." class="rounded-circle"/>
                        </div>
                        <h4 class="sub-info">Projects</h4>
                        <p class="display-30 mb-0">Vel proin gravida nibh velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>





    <div class="container mt-5">
  <section class="dark-grey-text mb-5">
    <h3 class="font-weight-bold text-center mb-4">Contact Us</h3>
    <div class="row">
      <div class="col-lg-5 mb-lg-0 pb-lg-3 mb-4">
        <div class="card">
          <div class="card-body">
        
            <div class="form-header blue accent-1">
              <h3 class="mt-2"><i class="fas fa-envelope"></i> Write to us:</h3>
            </div>
            <p class="dark-grey-text">We'll write rarely, but only the best content.</p>
          
            <div class="md-form">
              <i class="fas fa-user prefix grey-text"></i>
              <input type="text" id="form-name" class="form-control"/>
              <label for="form-name">Your name</label>
            </div>
            <div class="md-form">
              <i class="fas fa-envelope prefix grey-text"></i>
              <input type="text" id="form-email" class="form-control"/>
              <label for="form-email">Your email</label>
            </div>
            <div class="md-form">
              <i class="fas fa-tag prefix grey-text"></i>
              <input type="text" id="form-Subject" class="form-control"/>
              <label for="form-Subject">Subject</label>
            </div>
            <div class="md-form">
              <i class="fas fa-pencil-alt prefix grey-text"></i>
              <textarea id="form-text" class="form-control md-textarea" rows="3"></textarea>
              <label for="form-text">Send message</label>
            </div>
            <div class="text-center">
              <button class="btn btn-light-blue">Submit</button>
            </div>
          </div>
        </div>
     

      </div>
    
      
      <div class="col-lg-7">

      
        <div id="map-container-section" class="z-depth-1-half map-container-section mb-4" style={{height: '400px'}}>
          <iframe src="https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0"
            style={{border:0}} allowfullscreen></iframe>
        </div>
      
        <div class="row text-center">
          <div class="col-md-4">
            <a class="btn-floating blue accent-1">
              <i class="fas fa-map-marker-alt"></i>
            </a>
            <p>New York, 94126</p>
            <p class="mb-md-0">United States</p>
          </div>
          <div class="col-md-4">
            <a class="btn-floating blue accent-1">
              <i class="fas fa-phone"></i>
            </a>
            <p>+ 01 234 567 89</p>
            <p class="mb-md-0">Mon - Fri, 8:00-22:00</p>
          </div>
          <div class="col-md-4">
            <a class="btn-floating blue accent-1">
              <i class="fas fa-envelope"></i>
            </a>
            <p>info@gmail.com</p>
            <p class="mb-0">sale@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


<Footer/>


</div>

)
}
export default Main;