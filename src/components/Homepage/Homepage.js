import React from 'react';
import Banner from './Banner';
import Container from '../general/Container/Container';
import MedicalServices from './MedicalServices';
import Banner2 from './Banner2';
import Quicklinks from './Quicklinks';
import CallToAction from './CallToAction';
// import PatientStories from './PatientStories';
// import Partners from './Partners';
import Footer from '../general/Footer/Footer';

function Homepage() {
  return (
    // <Container>
    <div style={{ flex: 1 }}>
      <Banner />
      <MedicalServices />
      <Banner2 />
      <Quicklinks />
      <CallToAction />
      {/* <Partners />
      <PatientStories /> */}
      <Footer />
    </div>
    // </Container>
  );
}

export default Homepage;
