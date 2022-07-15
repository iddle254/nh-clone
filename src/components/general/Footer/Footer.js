import React from 'react';
import './footer.css';
import FooterLogo from '../../Nav/images/logo-white.svg';

function Footer() {
  return (
    <footer>
      <div className='wrapper'>
        {/* <!-- quick-links --> */}
        <div className='quick-links'>
          <h3 className='footer-title'>Quick Links</h3>
          {/* <!-- footer-links --> */}
          <ul className='footer-links'>
            <li>
              <a href='javascript:;'>Patients & Visitors</a>
            </li>
            <li>
              <a href='javascript:;'>Health Professionals</a>
            </li>
            <li>
              <a href='javascript:;'>College of Health Sciences</a>
            </li>
            <li>
              <a href='javascript:;'>Clinical Services</a>
            </li>
            <li>
              <a href='javascript:;'>Other Services</a>
            </li>
            <li>
              <a href='javascript:;'>About Us</a>
            </li>
            <li>
              <a href='javascript:;'>Careers Portal</a>
            </li>
            <li>
              <a href='javascript:;'>Contact Us</a>
            </li>
            <li>
              <a href='javascript:;'>Services (A-Z listing)</a>
            </li>
            <li>
              <a href='javascript:;'>International Desk</a>
            </li>
            <li>
              <a href='javascript:;'>Payments</a>
            </li>
            <li>
              <a href='javascript:;'>Customer Care</a>
            </li>
            <li>
              <a href='javascript:;'>What to Bring</a>
            </li>
            <li>
              <a href='javascript:;'>Getting to Hospital</a>
            </li>
            <li>
              <a href='javascript:;'>Find Your Way Around</a>
            </li>
            <li>
              <a href='javascript:;'>Emergency Services</a>
            </li>
            <li>
              <a href='javascript:;'>Inpatient</a>
            </li>
            <li>
              <a href='javascript:;'>Outpatient</a>
            </li>
            <li>
              <a href='javascript:;'>Covid Center</a>
            </li>
            <li>
              <a href='javascript:;'>Speciality Clinics</a>
            </li>
          </ul>
          {/* <!-- footer-links end --> */}
        </div>
        {/* <!-- quick-links end --> */}
        {/* <!-- newsletter --> */}
        <div className='newsletter'>
          <h3 className='footer-title'>Stay Connected</h3>
          <form className='newsletter-subscription'>
            <input
              type='email'
              id='newsletter_box'
              name='newsletter_box'
              maxlength='50'
              placeholder='Subscribe to our mailing list'
              required
            />
            <button
              type='submit'
              className='btn-subscribe icon-arrow-long-right'
            ></button>
          </form>
        </div>
        {/* <!-- newsletter end --> */}
        {/* <!-- footer-contacts --> */}
        <div className='footer-contacts'>
          {/* <!-- footer-contacts-list --> */}
          <ul className='footer-contacts-list'>
            <li>
              <i className='icon-phone'></i>
              <a href='tel:0703082000'>0703 082 000</a> -{' '}
              <a href='tel:0730666000'>0730 666000</a>
            </li>
            <li>
              <i className='icon-email'></i>
              <a href='mailto:customer.service@nbihosp.org'>
                customer.service@nbihosp.org
              </a>
            </li>
            <li>
              <i className='icon-website'></i>
              <a href='https://thenairobihosp.org/'>thenairobihosp.org</a>
            </li>
            <li>
              <i className='icon-location'></i>
              <a
                href="https://www.google.com/maps/place/The+Nairobi+Hospital%E2%80%99s+Doctors'+Plaza/@-1.2958673,36.8011818,17z/data=!3m1!4b1!4m5!3m4!1s0x182f109555d32b53:0x742fed8596c675f0!8m2!3d-1.2958727!4d36.8033705"
                target='_blank'
              >
                The Nairobi Hospital, Argwings Kodhek Rd
              </a>
            </li>
          </ul>
          {/* <!-- footer-contacts-list end --> */}
        </div>
        {/* <!-- footer-contacts end --> */}
        <div className='footer-logo'>
          <a href='index.html'>
            <img
              src={FooterLogo}
              width='123'
              height='75'
              alt='The Nairobi Hospital Logo'
            />
          </a>
        </div>
        <div className='footer-bottom'>
          <span className='get-in-touch'>Get in touch</span>
          {/* <!-- social --> */}
          <div className='social'>
            <a
              href='javascript:;'
              target='_blank'
              className='icon-whatsapp'
              title='Chat with us on WhatsApp'
            ></a>
            <a
              href='javascript:;'
              target='_blank'
              className='icon-facebook'
              title='Follow us on Facebook'
            ></a>
            <a
              href='javascript:;'
              target='_blank'
              className='icon-twitter'
              title='Follow us on Twitter'
            ></a>
            <a
              href='javascript:;'
              target='_blank'
              className='icon-youtube'
              title='Watch us on YouTube'
            ></a>
            <a
              href='javascript:;'
              target='_blank'
              className='icon-instagram'
              title='Follow us on Instagram'
            ></a>
            <a
              href='javascript:;'
              target='_blank'
              className='icon-linkedin'
              title='Follow us on LinkedIn'
            ></a>
          </div>
          {/* <!-- social end --> */}
          <span className='copyright'>
            The Nairobi Hospital &copy; 2022 All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
