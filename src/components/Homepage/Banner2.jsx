import React from 'react';
import './banner2.css';

function Banner2() {
  return (
    <div className='banner2'>
      {/* <div className='outpatient-centers wrapper text-center'> */}
      <div className='content'>
        <h2 className='section-title small text-white'>Outpatient Clinics</h2>
        <ul className='col'>
          <li>Chandaria Accident & Emergency Centre</li>
          <li>Galleria Outpatient Centre</li>
          <li>Warwick Outpatient Centre</li>
          <li>Capital Outpatient Centre</li>
          <li>Rosslyn Riviera Outpatient Centre</li>
          <li>Kiambu OPC Outpatient Centre</li>
          <li>South Field Outpatient Centre</li>
        </ul>
        <a href='#' className='btn rounded btn-primary'>
          {' '}
          Read More{' '}
        </a>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Banner2;
