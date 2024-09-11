import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { MdError } from "react-icons/md";
import * as Yup from 'yup'



const ContactForm = () => {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }
    const onSubmit = values => {
        console.log('Submitting form', values);
        // submit to server here
    }
    // const validate = values => {
    //     let errors = {}

    //     if(!values.name) {
    //         errors.name = 'Name is required'
    //     }
    //     if(!values.email) {
    //         errors.email = 'Email is required'
    //     }
    //     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //         errors.email = 'Invalid email address'
    //     }

    //     if(!values.phone) {
    //         errors.phone = 'Phone is required'
    //     }
    //     if(!values.subject) {
    //         errors.subject = 'Subject is required'
    //     }
    //     if(!values.message) {
    //         errors.message = 'Message is required'
    //     }

    //     return errors
    // }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required')
    })

    const formik =  useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // console.log('form values', formik.values);

    // console.log('errors', formik.errors);

    console.log('visited', formik.touched);

    

    return (
        <>
            <section className="sec-contact">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                            <div className="info-item">
                                <span className="icon"><i className="fa-regular fa-location-dot"></i></span>
                                <h5>Address</h5>
                                <a href="">12345 102nd ST E, ABC, WA 12345</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                            <div className="info-item">
                                <span className="icon"><i className="fa-regular fa-phone-volume"></i> </span>
                                <h5>Phone</h5>
                                <a href="tel:1234567890">123-456-7890</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                            <div className="info-item">
                                <span className="icon"><i className="fa-regular fa-envelope-open-text"></i></span>
                                <h5>Email</h5>
                                <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <div className="head">
                                <h6>contact us</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel placeat velit maxime aliquid eligendi dolorem dignissimos porro voluptate dolore!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                        <div className="form-main">
                            {/* <Form action="https://formspree.io/f/xbjerlwg" method="POST"> */}
                            <Form onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className="input-field">
                                            <Form.Label className="fm-lb" htmlFor="fmctl1">your name</Form.Label>
                                            <Form.Control type="text" className="form-control inp-ctl" id="fmctl1" placeholder="enter your email" required name="name" autoComplete='off' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                                            {formik.touched.name && formik.errors.name? <small>{formik.errors.name}<MdError /></small>:null}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className="input-field">
                                            <Form.Label className="fm-lb" htmlFor="fmctl2">your email</Form.Label>
                                            <Form.Control type="email" className="form-control inp-ctl" id="fmctl2" placeholder="enter your name" required name="email" autoComplete='off' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                                            {formik.touched.email && formik.errors.email? <small>{formik.errors.email} <MdError /></small>:null}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className="input-field">
                                            <Form.Label className="fm-lb" htmlFor="fmctl3">your phone</Form.Label>
                                            <Form.Control type="number" className="form-control inp-ctl" id="fmctl3" placeholder="enter your phone number" required name="phone" autoComplete='off' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                                            {formik.touched.phone && formik.errors.phone? <small>{formik.errors.phone} <MdError /></small>:null}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className="input-field">
                                            <Form.Label className="fm-lb" htmlFor="fmctl4">subject</Form.Label>
                                            <Form.Control type="text" className="form-control inp-ctl" id="fmctl4" placeholder="enter your phone number" required name="subject" autoComplete='off' onChange={formik.handleChange} value={formik.values.subject} onBlur={formik.handleBlur} />
                                            {formik.touched.subject && formik.errors.subject? <small>{formik.errors.subject} <MdError /></small>:null}
                                        </div>
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                        <div className="input-field">
                                            <Form.Label className="fm-lb" htmlFor="fmctl5">your message</Form.Label>
                                            <Form.Control as="textarea" className="form-control txt-ctl"  placeholder="enter your message" name="message" id="fmctl5" rows="10" onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur}></Form.Control>
                                            {formik.touched.message && formik.errors.message? <small>{formik.errors.message} <MdError /></small>:null}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                        <div className="input-field">
                                            <button type="submit" value="send" className="btn submit-btn hvr-bounce-to-right">submit</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactForm