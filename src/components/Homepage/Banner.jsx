import React from 'react';
import './banner.css';

function Banner() {
  return (
    // <section
    //   className='banner banner--home'
    //   style="background-image:url('./images/banners/banner-1.jpg');"
    // >
    <div className='banner banner--home'>
      <div className='banner--caption'>
        <div className='wrapper'>
          <div className='title-col'>
            <h1 className='page-title'>
              Welcome to World Class Healthcare <br />
              The Nairobi Hospital
            </h1>
          </div>
          <div className='form-control-col'>
            <div className='custom-select solutions'>
              <select
                id='solution_finder'
                name='solution_finder'
                className='form-control rounded'
              >
                <option disabled='' selected=''>
                  How can we help you?
                </option>
                <option>Solution 1</option>
                <option>Solution 2</option>
                <option>Solution 3</option>
              </select>
            </div>
          </div>
          <div className='btn-col'>
            <a href='javascript:;' className='btn rounded-left btn-primary'>
              <i className='icon-clipboard'></i>
              Patient Registration
            </a>
            <a href='javascript:;' className='btn btn-primary'>
              <i className='icon-time'></i>
              Visiting Hours
            </a>
            <a href='javascript:;' className='btn btn-primary'>
              <i className='icon-location'></i>
              Getting to the Hospital
            </a>
            <a href='javascript:;' className='btn rounded-right btn-primary'>
              <i className='icon-doctor'></i>
              Find a Doctor
            </a>
          </div>
          {/* <!-- scroll-to-explore --> */}
          <a href='#medical-services' className='scroll-to-explore'>
            <span className='label'>Scroll to Explore</span>
            <i className='icon-scroll-arrow-down'></i>
          </a>
          {/* <!-- scroll-to-explore end --> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
