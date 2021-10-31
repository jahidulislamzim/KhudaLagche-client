import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className="bg-color">
            <div className="container px-4 py-4 bg-color" id="featured-3">
                <h3 className="pb-2 border-bottom text-center">Our Feature</h3>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
                    <div className="feature col hvr-icon-grow-rotate">
                        <div className="feature-icon bg-primary bg-gradient  hvr-icon">
                            <i className="fas fa-hamburger"></i>
                        </div>
                        <h2>1. Cashback and Loyalty Programs</h2>
                        <p>
                            When it comes to attracting more customers to your food delivery app, discounts and special offers are the best way. You should routinely offer great discounts to engage customers. According to the reports, around 40% of users use a food ordering app to look for discounts and cashback, while 25% of users use these apps just to earn loyalty points.
                        </p>
                    </div>
                    <div className="feature col hvr-icon-grow-rotate">
                        <div className="feature-icon bg-primary bg-gradient hvr-icon">

                        </div>
                        <h2>2. Real-Time GPS Tracking of Food Delivery</h2>
                        <p>This is one of the essential features of food delivery apps that enable customers to track the location of their food through real-time GPS. The purpose of GPS is to offer two-way tracking as well as functioning. It helps to recognize the user’s location to deliver the food. And once the area is confirmed, users can easily track the progress and movement of the delivery personnel.</p>
                    </div>
                    <div className="feature col hvr-icon-grow-rotate">
                        <div className="feature-icon bg-primary bg-gradient  hvr-icon">
                            <i className="fas fa-motorcycle"></i>
                        </div>
                        <h2>3. Easy Payment Options</h2>
                        <p>From a business owner’s perspective, payments play a significant role in every business. Though it’s the last process of the order placement if a customer faces any minor/major problem they won’t ever try again. So, making the payment procedure exceedingly productive and simple to use, a customer must have all the payment options listed in your on-demand food delivery app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
