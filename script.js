function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const skillsList = skills.split(',').map(s => s.trim()).filter(Boolean).map(s => `<li>${s}</li>`).join('');

    const resumeHTML = `
        <div class="resume-header">
            <h2>${name}</h2>
            <div class="contact-info">
                <span>${email}</span> | <span>${phone}</span>
            </div>
        </div>
        <div class="resume-section">
            <h3>Summary</h3>
            <p>${summary.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="resume-section">
            <h3>Experience</h3>
            <p>${experience.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p>${education.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <ul class="skills-list">${skillsList}</ul>
        </div>
    `;
    document.getElementById('resume-preview').innerHTML = resumeHTML;
    document.getElementById('download-btn').style.display = 'inline-block';
}

function downloadResume() {
    const content = document.getElementById('resume-preview').innerHTML;
    const blob = new Blob([
        `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>My Resume</title><link rel='stylesheet' href='style.css'></head><body><div class='container'>${content}</div></body></html>`
    ], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'resume.html';
    a.click();
}
