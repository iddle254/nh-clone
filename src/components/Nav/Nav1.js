import React from 'react';
import './nav1.css';

function Nav1() {
  return (
    <header>
      {/* <!-- top-bar --> */}
      <div className='top-bar'>
        <div className='wrapper'>
          <div className='col left'>
            <span className='section-title small text-brown'>
              Covid 19 Updates
            </span>
          </div>
          <div className='col right'>
            <div className='inline-btns'>
              <a href='javascript:;' className='btn btn-outline rounded-left'>
                <i className='icon-syringe'></i> Get a Covid Vaccine
              </a>
              <a href='javascript:;' className='btn btn-primary rounded-right'>
                <i className='icon-sick'></i> Take a Covid Test
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- top-bar end -->
  <!-- bottom-bar --> */}
      <div className='bottom-bar'>
        <div className='wrapper'>
          <div className='col left'>
            {/* <!-- contact-list --> */}
            <ul className='contact-list'>
              <li>
                <a href='mailto:hosp@nbihosp.org'>
                  <i className='icon-email-filled'></i>
                  <span>hosp@nbihosp.org</span>
                </a>
              </li>
              <li>
                <a href='tel:+254703082000'>
                  <i className='icon-phone-filled'></i>
                  <span>(+254) 703082000</span>
                </a>
              </li>
            </ul>
            {/* <!-- contact-list end --> */}
          </div>
          <div className='col right'>
            {/* <!-- secondary-nav --> */}
            <nav className='secondary-nav'>
              <a href='careers.html'>Careers</a>
              <a href='contact-us.html'>Contact Us</a>
            </nav>
            {/* <!-- secondary-nav end -->
              <!-- social --> */}
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
            <div className='btn-search icon-search' role='button'></div>
          </div>
        </div>
      </div>
      {/* <!-- bottom-bar end -->
  <!-- menu-bar --> */}
      <div className='menu-bar'>
        <div className='wrapper'>
          <a href='index.html' className='logo'></a>
          <nav className='nav-bar'>
            <ul className='main-nav'>
              <li>
                <a href='./' className='primary-menu'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='javascript:;'
                  className='primary-menu'
                  aria-haspopup='true'
                >
                  Patients & Visitors
                </a>
                <ul className='mega-menu'>
                  <li>
                    <a
                      href='patient-visitors-inpatient.html'
                      className='mega-menu-header'
                    >
                      Inpatient
                    </a>
                    <a
                      href='javascript:;'
                      className='mobile-menu-list-trigger icon-menu-arrow-down'
                    ></a>
                    <ul className='menu-list'>
                      <li>
                        <a href='patient-visitors-inner.html'>
                          Admission Charges
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-inpatient.html'>
                          High Critical Care
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-inpatient.html'>
                          Visiting Hours
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-inpatient.html'>FAQs</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href='patient-visitors-outpatient.html'
                      className='mega-menu-header'
                    >
                      Outpatient
                    </a>
                    <a
                      href='javascript:;'
                      className='mobile-menu-list-trigger icon-menu-arrow-down'
                    ></a>
                    <ul className='menu-list'>
                      <li>
                        <a href='patient-visitors-outpatient.html'>Service</a>
                      </li>
                      <li>
                        <a href='patient-visitors-outpatient.html'>Location</a>
                      </li>
                      <li>
                        <a href='patient-visitors-outpatient.html'>
                          Day Surgery Care Services
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-outpatient.html'>
                          Cardiac Catheterization Laboratory
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-outpatient.html'>
                          Mother and Child
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-outpatient.html'>
                          Dialysis Services
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-outpatient.html'>FAQs</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href='patient-visitors-covid-center.html'
                      className='mega-menu-header'
                    >
                      Covid Center
                    </a>
                    <a
                      href='javascript:;'
                      className='mobile-menu-list-trigger icon-menu-arrow-down'
                    ></a>
                    <ul className='menu-list'>
                      <li>
                        <a
                          href='patient-visitors-covid-center.html'
                          target='_blank'
                        >
                          COVID Vaccination Portal
                        </a>
                      </li>
                      <li>
                        <a
                          href='patient-visitors-covid-center.html'
                          target='_blank'
                        >
                          COVID Testing Portal (PCR Test)
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-covid-center.html'>
                          UN-TNH Treatment Facility
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-covid-center.html'>
                          COVID 19 Information
                        </a>
                      </li>
                      <li>
                        <a href='patient-visitors-covid-center.html'>FAQs</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href='javascript:;'
                  className='primary-menu'
                  aria-haspopup='true'
                >
                  Health Professionals
                </a>
                <ul className='mega-menu'>
                  <li>
                    <ul className='menu-list'>
                      <li>
                        <a href='javascript:;'>Doctors & Medical Staff</a>
                      </li>
                      <li>
                        <a href='javascript:;'>Diseases and Conditions</a>
                      </li>
                      <li>
                        <a href='javascript:;'>
                          Medical Departments and Centres
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href='javascript:;'
                  className='primary-menu'
                  aria-haspopup='true'
                >
                  Clinical Services
                </a>
                <ul className='mega-menu'>
                  <li>
                    <ul className='menu-list two-columns'>
                      <li>
                        <a href='clinical-services-pharmacy.html'>
                          Pharmacy Services
                        </a>
                      </li>
                      <li>
                        <a href='clinical-services-lab.html'>
                          Laboratory Services
                        </a>
                      </li>
                      <li>
                        <a href='clinical-services-radiology.html'>
                          Radiology Services
                        </a>
                      </li>
                      <li>
                        <a href='javascript:;'>Endoscopy Services</a>
                      </li>
                      <li>
                        <a href='javascript:;'>
                          Operating Theatre & Main Surgeries
                        </a>
                      </li>
                      <li>
                        <a href='javascript:;'>Counselling & Social Work</a>
                      </li>
                      <li>
                        <a href='javascript:;'>Chaplaincy</a>
                      </li>
                      <li>
                        <a href='javascript:;'>Ambulance Services</a>
                      </li>
                      <li>
                        <a href='javascript:;'>FAQs</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href='javascript:;'
                  className='primary-menu'
                  aria-haspopup='true'
                >
                  College of Health Sciences
                </a>
                <ul className='mega-menu'>
                  <li>
                    <ul className='menu-list two-columns'>
                      <li>
                        <a href='college-about.html'>About the College</a>
                      </li>
                      <li>
                        <a href='college-departments.html'>Basic Department</a>
                      </li>
                      <li>
                        <a href='college-post-departments.html'>
                          Post Basic Department
                        </a>
                      </li>
                      <li>
                        <a href='college-student-sponsorship.html'>
                          Student Sponsorship
                        </a>
                      </li>
                      <li>
                        <a href='college-facilities.html'>Facilities</a>
                      </li>
                      <li>
                        <a href='college-faqs.html'>FAQs</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href='javascript:;'
                  className='primary-menu'
                  aria-haspopup='true'
                >
                  Other Services
                </a>
                <ul className='mega-menu'>
                  <li>
                    <ul className='menu-list two-columns'>
                      <li>
                        <a href='javascript:;'>Laundry Services</a>
                      </li>
                      <li>
                        <a href='javascript:;'>Convention Centre</a>
                      </li>
                      <li>
                        <a href='javascript:;' target='_blank'>
                          Suppliers Portal
                        </a>
                      </li>
                      <li>
                        <a href='other-services-news-media.html'>
                          News & Media
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href='javascript:;'
                  className='primary-menu'
                  aria-haspopup='true'
                >
                  About Us
                </a>
                <ul className='mega-menu'>
                  <li>
                    <ul className='menu-list two-columns'>
                      <li>
                        <a href='about-who-we-are.html'>Who we are</a>
                      </li>
                      <li>
                        <a href='about-strategy.html'>Strategy</a>
                      </li>
                      <li>
                        <a href='about-board-of-management.html'>
                          Board of Management
                        </a>
                      </li>
                      <li>
                        <a href='about-board-of-trustees.html'>
                          Board of Trustees
                        </a>
                      </li>
                      <li>
                        <a href='about-senior-management.html'>
                          Senior Management Team
                        </a>
                      </li>
                      <li>
                        <a href='about-history.html'>History</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className='btn-search icon-search' role='button'></div>
          <div className='btn-menu icon-menu' role='button'></div>
        </div>
      </div>
      {/* <!-- menu-bar end --> */}
    </header>
  );
}

export default Nav1;
