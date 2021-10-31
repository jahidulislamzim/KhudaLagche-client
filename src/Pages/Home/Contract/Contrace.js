import React from 'react';
import contractImg from '../../../Images/contactus.jpg';
import './Contract.css';

const Contrace = () => {
    return (
        <div>
            <div className="imgcontainer">
                <picture>
                    <source srcset={contractImg} type="image/webp"></source>
                    <img
                        src={contractImg}
                        className="img-fluid blackfade"
                        alt="kitchen"
                    ></img>{" "}
                </picture>

                <div className="centered text-light">
                    <h1 className="font">Contract Us</h1>
                    <p>
                        Send us a message using our form and we'll get back to you with an answer shortly
                    </p>
                </div>
            </div>
            <div className="container mb-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            {" "}
                            <form>
                                <div className="form-group">
                                    <input
                                        type="name"
                                        className="form-control"
                                        id="exampleInputName"
                                        aria-describedby="NameHelp"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        type="message"
                                        className="form-control "
                                        id="exampleInputmessage"
                                        placeholder="Messahe"
                                        rows="6"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>{" "}
            </div>
        </div>
    );
};

export default Contrace;