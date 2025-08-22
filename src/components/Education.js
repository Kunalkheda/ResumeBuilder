import React from 'react';

function Education({ form, setForm }) {
  return (
    <div className="form-section">
      <h2>Education</h2>
      <textarea
        value={form.education}
        onChange={e => setForm(f => ({ ...f, education: e.target.value }))}
        placeholder="Your education background"
        required
      />
    </div>
  );
}

export default Education;
