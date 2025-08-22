import React from 'react';

function Summary({ form, setForm }) {
  return (
    <div className="form-section">
      <h2>Summary</h2>
      <textarea
        value={form.summary}
        onChange={e => setForm(f => ({ ...f, summary: e.target.value }))}
        placeholder="Brief summary about yourself"
        required
      />
    </div>
  );
}

export default Summary;
