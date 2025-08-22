import React from 'react';

function Experience({ form, setForm }) {
  return (
    <div className="form-section">
      <h2>Experience</h2>
      <textarea
        value={form.experience}
        onChange={e => setForm(f => ({ ...f, experience: e.target.value }))}
        placeholder="Your work experience"
        required
      />
    </div>
  );
}

export default Experience;
