<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EIE Symposium 2026</title>
 <style>
  /* Global */
* { margin:0; padding:0; box-sizing:border-box; font-family: 'Segoe UI', sans-serif; }
body { background:#0f172a; color:white; line-height:1.6; }

/* Header */
.header {
  display:flex; justify-content:space-between; align-items:center;
  padding:15px 30px; background:#111827; position:sticky; top:0; z-index:1000;
}
.logo { font-size:1.4rem; font-weight:bold; color:#ff5a5f; }
.nav a { margin:0 12px; color:#eee; text-decoration:none; }
.nav a:hover { color:#ff5a5f; }
.btn { background:#ff5a5f; color:black; padding:8px 16px; border-radius:20px; font-weight:bold; }
.menu-toggle { display:none; cursor:pointer; }

/* Hero */
.hero {
  height:100vh; display:flex; justify-content:center; align-items:center;
  background:linear-gradient(135deg,#7c3aed,#ff5a5f);
  text-align:center; padding:0 20px;
}
.hero h1 { font-size:3rem; margin-bottom:15px; }
.hero p { font-size:1.2rem; margin-bottom:20px; }

/* Sections */
section { padding:60px 20px; max-width:1100px; margin:auto; }
h2 { font-size:2rem; margin-bottom:20px; text-align:center; }

/* Tracks */
.track-list { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px; }
.track { background:#1e293b; padding:20px; border-radius:12px; text-align:center; transition:.3s; }
.track:hover { background:#ff5a5f; color:black; }

/* Speakers */
.speaker-list { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px; }
.speaker { background:#1e293b; padding:20px; border-radius:12px; text-align:center; transition:.3s; }
.speaker:hover { background:#7c3aed; }

/* Schedule */
.schedule ul { list-style:none; max-width:600px; margin:auto; }
.schedule li { background:#1e293b; padding:12px 20px; border-radius:8px; margin:10px 0; transition:.3s; }
.schedule li:hover { background:#ff5a5f; color:black; }

/* Contact */
form { display:flex; flex-direction:column; gap:12px; max-width:400px; margin:auto; }
form input, form button { padding:12px; border:none; border-radius:8px; }
form input { background:#1e293b; color:white; }
form button { background:#ff5a5f; color:black; font-weight:bold; cursor:pointer; }
form button:hover { background:#7c3aed; color:white; }

/* Footer */
.footer { text-align:center; padding:20px; background:#111827; margin-top:30px; font-size:.9rem; color:#aaa; }

/* Responsive */
@media(max-width:768px){
  .nav { display:none; flex-direction:column; background:#111827; position:absolute; top:60px; right:0; width:200px; padding:20px; }
  .nav.active { display:flex; }
  .menu-toggle { display:block; }
}

 </style>
</head>
<body>
  <!-- HEADER -->
  <header class="header">
    <div class="logo">EIE Sympo</div>
    <nav class="nav">
      <a href="#about">About</a>
      <a href="#tracks">Tracks</a>
      <a href="#speakers">Speakers</a>
      <a href="#schedule">Schedule</a>
      <a href="#contact" class="btn">Register</a>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">☰</div>
  </header>

  <!-- HERO -->
  <section class="hero" id="about">
    <div class="hero-content">
      <h1>EIE Symposium 2026</h1>
      <p>Innovation • Instrumentation • Impact</p>
      <a href="#contact" class="btn">Register Now</a>
    </div>
  </section>

  <!-- TRACKS -->
  <section class="tracks" id="tracks">
    <h2>Tracks & Workshops</h2>
    <div class="track-list">
      <div class="track">Sensors & IoT</div>
      <div class="track">Control Systems</div>
      <div class="track">Signal Processing</div>
      <div class="track">Instrumentation</div>
    </div>
  </section>

  <!-- SPEAKERS -->
  <section class="speakers" id="speakers">
    <h2>Speakers</h2>
    <div class="speaker-list">
      <div class="speaker">Dr. S. Raman<br><small>Keynote - Robotics</small></div>
      <div class="speaker">Prof. M. Anbu<br><small>Instrumentation Tech</small></div>
      <div class="speaker">Ms. Leena Thomas<br><small>IoT Product Manager</small></div>
      <div class="speaker">Mr. Kiran Patel<br><small>Embedded Systems</small></div>
    </div>
  </section>

  <!-- SCHEDULE -->
  <section class="schedule" id="schedule">
    <h2>Schedule</h2>
    <ul>
      <li><b>09:00</b> - Registration</li>
      <li><b>10:00</b> - Opening Keynote</li>
      <li><b>11:15</b> - Track Sessions</li>
      <li><b>01:00</b> - Lunch</li>
      <li><b>02:00</b> - Workshops</li>
      <li><b>04:30</b> - Panel Discussion</li>
    </ul>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <h2>Register Now</h2>
    <p>Fill out the form below to register for the EIE Symposium.</p>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSci2pWrHsQ1eoavh9y4112PJ73_EkRic_vB1WktXaWr7dfgZA/viewform?embedded=true"
            width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">
      Loading…
    </iframe>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <p>© 2026 EIE Symposium • Dept. of EIE</p>
    <p>Email: eie@college.edu | Phone: +91-XXXXXXXXXX</p>
  </footer>

  <script>
    // Toggle mobile menu
function toggleMenu(){
  document.querySelector('.nav').classList.toggle('active');
}

// Smooth scroll (optional)
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector('.nav').classList.remove('active');
  });
});

// Simple form handler
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("✅ Registration submitted!");
  this.reset();
});

  </script>
</body>
</html>

