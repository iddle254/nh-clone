import React from 'react';
import './quicklinks.css';

function Quicklinks() {
  return (
    <section className='content-wrapper'>
      <div className='wrapper'>
        <div className='two-col-grid'>
          <div className='col left'>
            <h2 className='section-title medium text-brown'>Quick Links</h2>
            {/* <!-- quick-links-list --> */}
            <ul className='quick-links-list'>
              <li>
                <a href='javascript:;'>Services (A-Z listing)</a>
              </li>
              <li>
                <a href='javascript:;'>International desk</a>
              </li>
              <li>
                <a href='javascript:;'>Payments</a>
              </li>
              <li>
                <a href='javascript:;'>Customer support</a>
              </li>
              <li>
                <a href='javascript:;'>What to bring</a>
              </li>
              <li>
                <a href='javascript:;'>Getting to the hospital</a>
              </li>
              <li>
                <a href='javascript:;'>Find your way around</a>
              </li>
            </ul>
            {/* <!-- quick-links-list end --> */}
          </div>
          <div className='col right'>
            <h2 className='section-title medium text-brown'>
              Contact Services
            </h2>
            <ul className='contact-services-list'>
              <li>
                <i className='icon-phone'></i>
                <a href='tel:+254700000000'>+254 700 000 000</a>
              </li>
              <li>
                <i className='icon-email'></i>
                <a href='mailto:hosp@nbihosp.org'>hosp@nbihosp.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quicklinks;
