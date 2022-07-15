import React from 'react';
import './plugins/owl.css';
import './partners.css';
import Britam from './images/partners/britam.svg';
import Nhif from './images/partners/nhif.svg';
import Madison from './images/partners/madison.svg';
import Jubilee from './images/partners/jubilee.svg';

function Partners() {
  return (
    <section className='content-wrapper'>
      <div className='wrapper text-center'>
        <h2 className='section-title'>Our Insurance Partners</h2>
        {/* <!-- partners-slider --> */}
        <div className='partners-slider owl-carousel'>
          <div className='item'>
            <img src={Nhif} width='100' height='51' alt='NHIF' />
          </div>
          <div className='item'>
            <img src={Britam} width='118' height='42' alt='Britam' />
          </div>
          <div className='item'>
            <img src={Madison} width='155' height='38' alt='Madison' />
          </div>
          <div className='item'>
            <img src={Jubilee} width='104' height='53' alt='Jubilee' />
          </div>
        </div>
        {/* <!-- partners-slider end --> */}
        <div className='partners-slider-dots'></div>
      </div>
    </section>
  );
}

export default Partners;
