import React from "react";
import { Link } from "react-router-dom";
import Header from "./nav";
const About=()=>{
    return(
        <>
        <Header/>
        <div class="container mt-5 pt-2">
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
    </>
    )
}
export default About;