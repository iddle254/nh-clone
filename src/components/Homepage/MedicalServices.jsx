import React from 'react';
import './medicalServices.css';

function MedicalServices() {
  return (
    <section id='medical-services' className='content-wrapper'>
      <div className='wrapper text-center'>
        <h2 className='section-title'>Medical Services</h2>
        <div className='medical-services'>
          <a href='javascript:;' className='block'>
            <i className='icon icon-dentistry'></i>
            <span className='label'>Dentistry</span>
          </a>
          <a href='javascript:;' className='block'>
            <i className='icon icon-pharmacy'></i>
            <span className='label'>Pharmacy</span>
          </a>
          <a href='javascript:;' className='block'>
            <i className='icon icon-ophthalmology'></i>
            <span className='label'>Ophthalmology</span>
          </a>
          <a href='javascript:;' className='block'>
            <i className='icon icon-general-surgery'></i>
            <span className='label'>General Surgery</span>
          </a>
          <a href='javascript:;' className='block'>
            <i className='icon icon-urologist'></i>
            <span className='label'>Urologist</span>
          </a>
          <a href='javascript:;' className='block'>
            <i className='icon icon-gynaecology'></i>
            <span className='label'>Gynaecology</span>
          </a>
        </div>
        <div className='spacer'></div>
        <a href='javascript:;' className='btn btn-primary rounded'>
          More Services
        </a>
      </div>
    </section>
  );
}

export default MedicalServices;
