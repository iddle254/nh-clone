import React from 'react';
import './calltoaction.css';
import cta from './images/cta/home-about-hosi.jpg';
function CallToAction() {
  return (
    <section className='content-wrapper about-hospital'>
      <div className='wrapper'>
        {/* <!-- image-block --> */}
        <div className='image-block  image-block--reverse'>
          {/* <figure> */}
          <div className='row'>
            <div className='col-lg-6'>
              <div className='image-block__content image-block__content--brown'>
                <h2 className='section-title text-white'>About the Hospital</h2>
                <p>
                  Opened in 1954, The Nairobi Hospital has excelled in medical
                  expertise and services provision and has deservedly earned
                  recognition throughout East Africa and beyond as an advanced
                  diagnostic, treatment and referral centre. Expansive
                  investment in latest technology and medical equipment has
                  enabled us establish leadership in medical procedures both in
                  Kenya and outside.
                </p>
                <a
                  href='javascript:;'
                  className='btn btn-primary white-hover rounded'
                >
                  Read More
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={cta} />
            </div>
          </div>

          {/* </figure> */}
        </div>
        {/* <!-- image-block end --> */}
      </div>
    </section>
  );
}

export default CallToAction;
