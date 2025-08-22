import React from 'react';

function Skills({ form, setForm }) {
  return (
    <div className="form-section">
      <h2>Skills</h2>
      <textarea
        value={form.skills}
        onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
        placeholder="Your skills (comma separated)"
        required
      />
    </div>
  );
}

export default Skills;
