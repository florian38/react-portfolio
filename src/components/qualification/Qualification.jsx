// Import necessary libraries and components
import React, { useState } from "react";

//Import style
import "./qualification.css";

//Import assets
import multivers from '../../assets/multivers.png';
import jdc from '../../assets/jdc.png';
import uga from '../../assets/uga.png';
import iut from '../../assets/iut.png';
import lmc from '../../assets/lmc.png';

//Import component
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

//Component Qualification
const Qualification = () => {

    const experiences = [
        {
            title: 'Entrepreneur',
            company_name: 'SAS Multivers',
            icon: multivers,
            iconBg: 'var(--body-color)',
            date: 'Août 2022 - Février 2024',
        },
        {
            title: 'Technicien itinérant',
            company_name: 'JDC SA',
            icon: jdc,
            iconBg: 'var(--body-color)',
            date: 'Juin 2020 - Juillet 2022',
        },
        {
            title: 'Licence Professionnel SMIN / Alternant développeur',
            company_name: 'Hardis Group',
            icon: uga,
            iconBg: 'var(--body-color)',
            date: 'Septembre 2018 - Juin 2019',
        },
        {
            title: 'DUT informatique',
            company_name: 'IUT2 Grenoble',
            icon: iut,
            iconBg: 'var(--body-color)e',
            date: 'Janvier 2015 - Janvier 2017',
        },
        {
            title: 'Baccalauréat Scientifique - Spécialité Math',
            company_name: 'Lycée Marie Curie - Echirolles',
            icon: lmc,
            iconBg: 'var(--body-color)',
            date: 'Juin 2014',
        },
    ];
  
    return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">Mon parcours</span>

        <VerticalTimeline >
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
            </VerticalTimeline>
    </section> 
  );
}


const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{
        background: 'transparant',
        color: '#292929',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      }}
      contentArrowStyle={{
        borderRight: '7px solid  #232631',
      }}
      date={
        <div>
          <h3>
            {experience.date}
          </h3>
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{width: '60%', height: '60%' , objectFit: 'contain'}}
          />
        </div>
      }>
      <div>
        <h3>
          {experience.title}
        </h3>
        <p
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
  

export default Qualification;