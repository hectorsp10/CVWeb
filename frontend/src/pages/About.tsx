import Header from '../components/reusable/Header.tsx'
import '../styles/pages/About.css'
import React, { useEffect, useState } from 'react';

function calculateExperience(from: Date, to: Date) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

export default function About() {
  const startDate = new Date('2024-08-19');

  type Experience = { years: number; months: number; days: number };
  const [experience, setExperience] = useState<Experience>({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const totalExperience = calculateExperience(startDate, new Date());
    const totalSteps = 30;
    const duration = 1000;
    const stepTime = duration / totalSteps;
    let step = 0;

    const interval = setInterval(() => {
      step++;

      setExperience({
        years: Math.floor((totalExperience.years * step) / totalSteps),
        months: Math.floor((totalExperience.months * step) / totalSteps),
        days: Math.floor((totalExperience.days * step) / totalSteps),
      });

      if (step >= totalSteps) {
        clearInterval(interval);
        setExperience(totalExperience); // asegurar precisión final
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <section className='container'>
        <div>
          <div className='intro row'>
            <h1 className="title-1">Who am I</h1>
            <a className='question'>?</a>
          </div>
          <p className='text text-center about-text'>
            Long story short, I am a software developer focused on <strong>backend</strong> who loves to <strong>learn</strong> and <strong>create</strong>.
            My main focus on life and workwise is to build true value for the society, which helps me keep motivated and fulfilled.
          </p>
        </div>
        <div className='about-section'>
          <div className='row'>
            <div className='about-section-content'>
              <h1 className='title-1'>Experience<a className='dot'>.</a></h1>
              <p className='text'>
                {experience.years} {experience.months}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}