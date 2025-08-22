import React from 'react';
import './ResumePreview.css';

function ResumePreview({ form }) {
  const skillsList = form.skills.split(',').map(s => s.trim()).filter(Boolean);
  return (
    <div className="preview-section">
      <h2>Live Preview</h2>
      <div className="resume-preview">
        <div className="resume-header">
          <h2>{form.name || 'Your Name'}</h2>
          <div className="contact-info">
            <span>{form.email || 'your@email.com'}</span> | <span>{form.phone || '123-456-7890'}</span>
          </div>
        </div>
        <div className="resume-section">
          <h3>Summary</h3>
          <p>{form.summary ? form.summary.split('\n').map((line, i) => <span key={i}>{line}<br/></span>) : 'A short summary about yourself.'}</p>
        </div>
        <div className="resume-section">
          <h3>Experience</h3>
          <p>{form.experience ? form.experience.split('\n').map((line, i) => <span key={i}>{line}<br/></span>) : 'Your work experience.'}</p>
        </div>
        <div className="resume-section">
          <h3>Education</h3>
          <p>{form.education ? form.education.split('\n').map((line, i) => <span key={i}>{line}<br/></span>) : 'Your education background.'}</p>
        </div>
        <div className="resume-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            {skillsList.length ? skillsList.map((s, i) => <li key={i}>{s}</li>) : <li>Your skills</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
