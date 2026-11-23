import "./App.css";

function App() {
  const instagramUrl =
    "https://www.instagram.com/_prashant_on_percussions/";

  const whatsappUrl =
    "https://wa.me/917045009126?text=Hello%20Prashant%2C%20I%20would%20like%20to%20know%20more%20about%20your%20performances.";

  const events = [
    "Destination Weddings",
    "Wedding Ceremonies",
    "Sangeet Nights",
    "Cocktail Evenings",
    "Receptions",
    "Wedding After-Parties",
    "Sundowners",
    "Pool Parties",
    "Beach Celebrations",
    "Private Parties",
    "Milestone Birthdays",
    "Anniversaries",
    "Engagement Celebrations",
    "Intimate Gatherings",
    "Luxury Soirées",
    "Brand Launches",
    "Fashion Events",
    "Corporate Parties",
    "Gala Evenings",
    "Award Nights",
    "Product Launches",
    "Hospitality Events",
    "Exclusive Social Celebrations",
  ];

  const musicStyles = [
    "Afro House",
    "Deep House",
    "Melodic House",
    "Tech House",
    "Progressive House",
    "Bollywood",
    "Commercial",
    "English",
  ];

  const videos = [
    { src: "/videos/performance-1.mp4", title: "Live Performance" },
    { src: "/videos/performance-2.mp4", title: "DJ Collaboration" },
    { src: "/videos/performance-3.mp4", title: "Celebration Energy" },
    { src: "/videos/performance-4.mp4", title: "Wedding Performance" },
    { src: "/videos/performance-5.mp4", title: "Stage Performance" },
  ];

  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <img
              src="/images/prashantphoto.jpeg"
              alt="Prashant Percussionist"
            />
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <main>

        <section id="home" className="hero">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-logo">
              <img
                src="/images/prashantphoto1.jpeg"
                alt="Prashant Percussionist"
              />
            </div>

            <div className="hero-text">

              <p className="eyebrow">
                LIVE PERCUSSIONIST • MUMBAI
              </p>

              <h1>
                PRASHANT
                <span>PERCUSSIONIST</span>
              </h1>

              <p className="hero-description">
                Rhythm. Energy. Experience.
                <br />
                Elevating celebrations through live percussion.
              </p>

              <div className="hero-buttons">

                <a
                  href="#about"
                  className="btn btn-primary"
                >
                  Discover My Journey
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline"
                >
                  Book a Performance
                </a>

              </div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>

        </section>


        {/* ================= INTRO ================= */}

        <section className="intro-section">

          <div className="container">

            <p className="section-label">
              THE EXPERIENCE
            </p>

            <h2>
              Feel The Rhythm.
              <br />
              <span>Experience The Energy.</span>
            </h2>

            <p className="intro-text">
              Live percussion transforms music from something you hear
              into something you feel. Every beat adds movement, energy
              and an unforgettable connection between the music and the audience.
            </p>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="about-section">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                ABOUT PRASHANT
              </p>

              <h2>
                A Journey Built
                <br />
                <span>On Rhythm.</span>
              </h2>

            </div>


            <div className="about-grid">

              <div className="about-image">

                <img
                  src="/images/prashantphoto.jpeg"
                  alt="Prashant Percussionist"
                />

                <div className="image-caption">
                  <span>LIVE</span>
                  <strong>PERCUSSION</strong>
                </div>

              </div>


              <div className="about-content">

                <p>
                  Born and brought up in Mumbai, Prashant began his journey
                  with music at the age of 11, and it has since evolved into
                  over a decade of dedication, performance, and artistic
                  exploration. With a B.Com degree from Sathaye College
                  and professional drumming training under renowned
                  musicians, he brings together technical musicianship
                  and an instinctive understanding of live entertainment.
                </p>

                <p>
                  Today, Prashant specializes in high-energy live
                  percussion alongside DJs, creating an immersive musical
                  experience that elevates destination weddings, private
                  celebrations, anniversaries, corporate events, and
                  luxury occasions. His performances are built around
                  rhythm, energy, and audience interaction—seamlessly
                  complementing the DJ while adding the unmistakable
                  impact of live percussion.
                </p>

                <p>
                  From intimate celebrations to grand destination
                  weddings, Prashant brings a refined yet electrifying
                  presence to every event, transforming great music into
                  an unforgettable live experience.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}

        <section className="stats-section">

          <div className="container stats-grid">

            <div className="stat">
              <strong>1000+</strong>
              <span>GIGS</span>
            </div>

            <div className="stat">
              <strong>30+</strong>
              <span>STATES</span>
            </div>

            <div className="stat">
              <strong>4</strong>
              <span>COUNTRIES</span>
            </div>

            <div className="stat">
              <strong>∞</strong>
              <span>MOMENTS</span>
            </div>

          </div>

        </section>


        {/* ================= MUSIC STYLE ================= */}

        <section className="music-section">

          <div className="container">

            <div className="section-heading center">

              <p className="section-label">
                MUSICAL IDENTITY
              </p>

              <h2>
                Music Style &
                <br />
                <span>Versatility</span>
              </h2>

            </div>


            <div className="music-content">

              <p>
                Prashant’s musical palette is rooted in rhythm, energy,
                and versatility. His live percussion seamlessly blends
                with a wide spectrum of sounds — from Afro House, Deep
                House, Melodic House, Tech House and Progressive House
                to Bollywood, Commercial and English, adapting effortlessly
                to the mood and energy of each celebration.
              </p>


              <div className="music-tags">

                {musicStyles.map((style) => (
                  <span key={style}>
                    {style}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================= PERFORMANCES ================= */}

        <section className="performance-section">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                THE PERFORMANCE
              </p>

              <h2>
                More Than
                <br />
                <span>Just A Beat.</span>
              </h2>

            </div>


            <div className="performance-grid">

              <article className="performance-card">

                <span className="card-number">
                  01
                </span>

                <h3>
                  Live Percussion
                </h3>

                <p>
                  High-energy live drumming that adds a powerful
                  organic layer to your music and creates an immersive
                  atmosphere.
                </p>

              </article>


              <article className="performance-card">

                <span className="card-number">
                  02
                </span>

                <h3>
                  DJ Collaboration
                </h3>

                <p>
                  Seamless interaction with DJs, blending live rhythm
                  with electronic music to create a dynamic and
                  elevated performance.
                </p>

              </article>


              <article className="performance-card">

                <span className="card-number">
                  03
                </span>

                <h3>
                  Audience Energy
                </h3>

                <p>
                  Connecting with the audience through rhythm,
                  movement and interaction to turn every performance
                  into a shared experience.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* ================= EVENTS ================= */}

        <section className="events-section">

          <div className="container">

            <div className="section-heading center">

              <p className="section-label">
                WHERE THE RHYTHM BELONGS
              </p>

              <h2>
                Events &
                <br />
                <span>Celebrations</span>
              </h2>

              <p className="section-description">
                From intimate gatherings to spectacular celebrations,
                every event becomes an opportunity to create an
                unforgettable musical experience.
              </p>

            </div>


            <div className="events-grid">

              {events.map((event, index) => (

                <div
                  className="event-item"
                  key={event}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{event}</p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= VIDEOS ================= */}

        <section className="videos-section">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                LIVE IN ACTION
              </p>

              <h2>
                Watch The
                <br />
                <span>Energy.</span>
              </h2>

              <p className="section-description">
                Experience the rhythm, movement and energy of live
                percussion through selected performance moments.
              </p>

            </div>


            <div className="video-grid">

              {videos.map((video, index) => (

                <div className="video-card" key={video.src}>

                  <video
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={`${video.src}#t=0.1`}
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.
                  </video>

                  <div className="video-info">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{video.title}</h3>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= QUOTE ================= */}

        <section className="quote-section">

          <div className="container">

            <p className="quote-small">
              THE SOUND OF THE MOMENT
            </p>

            <h2>
              “Feel The Beat.
              <br />
              <span>Experience The Moment.”</span>
            </h2>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section">

          <div className="container">

            <div className="section-heading center">

              <p className="section-label">
                LET'S CREATE SOMETHING
              </p>

              <h2>
                Bring The
                <br />
                <span>Energy.</span>
              </h2>

              <p className="section-description">
                Planning a wedding, celebration, corporate event or
                luxury occasion? Let's create a performance your guests
                will remember.
              </p>

            </div>


            <div className="contact-grid">

              {/* PHONE */}

              <a
                href="tel:+917045009126"
                className="contact-card"
              >

                <span className="contact-icon">
                  TEL
                </span>

                <div>
                  <small>PHONE</small>

                  <h3>
                    +91 70450 09126
                  </h3>
                </div>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:prashantmapelkar@gmail.com"
                className="contact-card"
              >

                <span className="contact-icon">
                  @
                </span>

                <div>
                  <small>EMAIL</small>

                  <h3>
                    prashantmapelkar@gmail.com
                  </h3>
                </div>

              </a>


              {/* INSTAGRAM */}

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >

                <span className="contact-icon">
                  IG
                </span>

                <div>
                  <small>INSTAGRAM</small>

                  <h3>
                    @_prashant_on_percussions
                  </h3>

                  <span className="redirect-text">
                    Visit Instagram →
                  </span>
                </div>

              </a>


              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card whatsapp-card"
              >

                <span className="contact-icon">
                  WA
                </span>

                <div>
                  <small>WHATSAPP</small>

                  <h3>
                    Chat With Me
                  </h3>

                  <span className="redirect-text">
                    Open WhatsApp →
                  </span>
                </div>

              </a>

            </div>


            <div className="availability">

              <span className="availability-dot"></span>

              <p>
                Currently available for bookings
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-content">

          <div className="footer-logo">

            <img
              src="/images/prashantphoto.jpeg"
              alt="Prashant Percussionist"
            />

          </div>


          <div className="footer-center">

            <p>
              PRASHANT PERCUSSIONIST
            </p>

            <span>
              Rhythm • Energy • Experience
            </span>

          </div>


          <div className="footer-social">

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Prashant Percussionist.
            All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;