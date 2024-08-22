import Image from "next/image";

export default function About() {
  return (
    <>
      <div className={`container mt-2 `}>
        <div className="card  p-3">
          <div className="d-flex justify-content-center mb-4 mt-3">
            <Image
              src="/nik.jpg"
              width={150}
              height={150}
              alt="Profile Picture"
              className="rounded-circle"
            />
          </div>
          <div className="text-center">
            <h2>Thichanon Butsaman</h2>
            <p className="text-muted">Web Developer & Technology Enthusiast</p>
          </div>

          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h4>Personal</h4>
              <p>I'm Nick. My full name is Thichanon Butsaman.</p>
              <p>
                I like learning new technology to improve my skills effectively.
              </p>
              <p>I hope you enjoy my website.</p>
            </div>
            <div className="col-md-5">
              <h4>Favorites</h4>
              <ul>
                <li>
                  <strong>Hobby:</strong> Coding, Reading tech blogs, Traveling
                </li>
                <li>
                  <strong>Sport:</strong> Football, Badminton
                </li>
                <li>
                  <strong>Movies:</strong> Inception, The Matrix, Interstellar
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h4>Favorite Tech Stack</h4>
              <ul>
                <li>Frontend: ASP.net, React, Next.js, Bootstrap</li>
                <li>Backend: PHP, C#, Node.js, Express.js</li>
                <li>Database: MySQL, MongoDB</li>
              </ul>
            </div>
            <div className="col-md-5">
              <h4>Hobbies</h4>
              <ul>
                <li>Exploring new programming languages and frameworks</li>
                <li>Watch anime and exercise in my free time.</li>
                <li>Attending tech meetups and conferences</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4>Get in Touch</h4>
            <p>
              If you'd like to connect or collaborate, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
