import React from 'react';

function PersonalInfo({ form, setForm }) {
  return (
    <div className="form-section">
      <h2>Personal Info</h2>
      <label>Full Name
        <input
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          required
        />
      </label>
      <label>Email
        <input
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          required
        />
      </label>
      <label>Phone
        <input
          type="text"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          required
        />
      </label>
    </div>
  );
}

export default PersonalInfo;
