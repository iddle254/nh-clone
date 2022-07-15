import React from 'react';
import './patientstories.css';
import './plugins/owl.css';

function PatientStories() {
  return (
    <section className='content-wrapper'>
      <div className='wrapper text-center'>
        <h2 className='section-title'>Patient Stories</h2>
        {/* <!-- patient-stories --> */}

        <div className='patient-stories'>
          <div className='patient-stories-slider owl-carousel'>
            <div className='panel'>
              <article id='slide_info'>
                <h1>Slide Title</h1>
                <p>Slide Description Text</p>
                <video controls='controls'>
                  <source
                    type='video/mp4'
                    src='www.808.dk/pics/video/gizmo.mp4'
                  ></source>
                </video>
              </article>
            </div>
            <div className='item'>
              <blockquote>
                Thank you so much for the love I have received from both the
                nursing staff and the doctors.
              </blockquote>
              <span className='author'>Jane Mwangi</span>
            </div>
            <div className='item'>
              <blockquote>
                My doctor was truly a God sent as she tackled the most unnatural
                kind of labour.
              </blockquote>
              <span className='author'>Lorraine Kibati</span>
            </div>
            <div className='item'>
              <blockquote>
                My healing jouney has been a memorable one. The skills and
                knowledge are truly exceptional.
              </blockquote>
              <span className='author'>Dickson Irungu</span>
            </div>
            <div className='item'>
              <blockquote>
                Hospital & staff were extremely warm & quick in getting me
                started with the procedures.
              </blockquote>
              <span className='author'>Otieno Orengo</span>
            </div>
          </div>

          {/* <!-- patient-stories-nav --> */}
          <div className='patient-stories-nav'></div>
          {/* <!-- patient-stories-nav end --> */}
        </div>
        {/* <!-- patient-stories end -->
                                <!-- patient-stories-dots --> */}
        <div className='patient-stories-dots'></div>
        {/* <!-- patient-stories-dots end --> */}
      </div>
    </section>
  );
}

export default PatientStories;
