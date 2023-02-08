import React from 'react'

const ContactForm = () => {
    return (
        <>
            <section className="sec-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <span className="icon"><i className="fa-regular fa-location-dot"></i></span>
                                <h5>Address</h5>
                                <a href="">12345 102nd ST E, ABC, WA 12345</a>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <span className="icon"><i className="fa-regular fa-phone-volume"></i> </span>
                                <h5>Phone</h5>
                                <a href="tel:1234567890">123-456-7890</a>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <span className="icon"><i className="fa-regular fa-envelope-open-text"></i></span>
                                <h5>Email</h5>
                                <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="head">
                                <h6>contact us</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel placeat velit maxime aliquid eligendi dolorem dignissimos porro voluptate dolore!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                        <div className="form-main">
                            <form action="https://formspree.io/f/xbjerlwg" method="POST">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="input-field">
                                            <label className="fm-lb" htmlFor="fmctl1">your name</label>
                                            <input type="text" className="form-control inp-ctl" id="fmctl1" placeholder="enter your email" required name="username" autoComplete='off' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="input-field">
                                            <label className="fm-lb" htmlFor="fmctl2">your email</label>
                                            <input type="email" className="form-control inp-ctl" id="fmctl2" placeholder="enter your name" required name="useremail" autoComplete='off' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="input-field">
                                            <label className="fm-lb" htmlFor="fmctl3">your phone</label>
                                            <input type="number" className="form-control inp-ctl" id="fmctl3" placeholder="enter your phone number" required name="userphone" autoComplete='off' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="input-field">
                                            <label className="fm-lb" htmlFor="fmctl4">subject</label>
                                            <input type="text" className="form-control inp-ctl" id="fmctl4" placeholder="enter your phone number" required name="subject" autoComplete='off' />
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div className="input-field">
                                            <label className="fm-lb" htmlFor="fmctl5">your message</label>
                                            <textarea className="form-control txt-ctl"  placeholder="enter your message" name="message" id="fmctl5" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div className="input-field">
                                            <button type="submit" value="send" className="btn submit-btn hvr-bounce-to-right">submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm