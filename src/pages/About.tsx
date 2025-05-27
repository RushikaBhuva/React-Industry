import React from 'react'
import Navbar from '../components/Navbar';
import AboutMission from '../components/AboutMission';
import Timeline from '../components/Timeline';
import Technology from '../components/Technology';
import TeamMember from '../components/TeamMember';

 function About() {
  return (
    <div>
        <Navbar></Navbar>
        <AboutMission/>
        <Timeline />
        <Technology />
        <TeamMember />
    </div>
  )
}
export default About;
