import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumePreview from './components/ResumePreview';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  return (
    <div className="app-container">
      <h1>React Resume Builder</h1>
      <div className="main-grid">
        <form className="resume-form" onSubmit={e => e.preventDefault()}>
          <PersonalInfo form={form} setForm={setForm} />
          <Summary form={form} setForm={setForm} />
          <Experience form={form} setForm={setForm} />
          <Education form={form} setForm={setForm} />
          <Skills form={form} setForm={setForm} />
        </form>
        <ResumePreview form={form} />
      </div>
    </div>
  );
}

export default App;
