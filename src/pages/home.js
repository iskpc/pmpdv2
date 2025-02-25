import { Link } from "react-router-dom";
import TestimonialSlider from "../components/slider";
import { AboutSvg } from "../components/svg";

export default function Home() {
  return (
    <>
      <section className="pt-6 pt-md-8 pb-8 pb-md-9 bg-light">
        <div className="header-design" />
        <div className="container-lg">
          <div className="row align-items-center md-reverse">
            <div className="col-md-6 align-center">
              {/* Image */}
              <div className="header-img ">
                <div className="header-img-overlay" />
              </div>
            </div>
            <div className="col-md-6 order-md-0 text-center text-md-start">
              {/* Heading */}
              <h1 className="display-3 mb-4">
                Let's build an amazing website for your brand{" "}
                <span className="text-primary-light">today </span>
              </h1>

              {/* Text */}
              <p className="fs-lg">
                Power your business to new heights with our result driven
                digital marketing, web design and creative services platform.
              </p>

              {/* Buttons */}
              <Link className="btn btn-primary-light lift" to="/contact">
                Get in touch
              </Link>
              <Link className="btn btn-white lift ms-3" to="/about">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPE */}
      <div className="position-relative">
        <div className="shape shape-fluid-x shape-bottom text-light pb-15 pb-md-4">
          <div className="shape-img pb-9 pb-md-15">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none">
              <path d="M0 0h100v25H75L25 50H0z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="pt-10 pt-md-12">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 text-center">
              {/* Divider */}
              <hr className="hr-sm bg-white-20 mx-auto mb-10 mb-md-12" />

              {/* Heading */}
              <h1 className="display-1 text-dark mb-9 mb-md-10">
                Our{" "}
                <span className="text-underline text-underline-primary-dark">
                  Creative Services
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="row md-reverse align-items-center justify-content-between">
            <div className="col-md-5 align-center">
              {/* Card */}
              <div className="position-relative">
                {/* Decoration */}
                <div className="position-absolute top-center top-md-start text-warning mt-n8 ms-md-n8">
                  <AboutSvg />
                </div>

                {/* Card */}
                <div className="header-img smm">
                  <div className="header-img-overlay" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 text-center text-md-start">
              {/* Heading */}
              <h3 className="display-4 mb-4">
                Social Media{" "}
                <span className="text-underline-warning">Management</span>
              </h3>

              {/* Text */}
              <p className="text-muted">
                We are fully committed to building you an aesthetically pleasing
                and engaging Social Media Presence that is guaranteed to drive
                traffic to your website and grow your business through a
                combination of tailored strategy, copywriting, social listening,
                research, reporting and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS AND VISAS ASSISTANCE */}
      <section className="py-10 py-md-12">
        <div className="container-lg">
          <div className="row md-reverse align-items-center justify-content-between">
            <div className="col-md-5 order-md-1">
              {/* Image grid */}
              <div className="img-grid img-grid-1 mb-8 mb-md-0 bg-checkered">
                <div className="img-grid-item">
                  {/* Image */}
                  <img
                    className="img-fluid rounded-top-start-3 rounded-bottom-end-3 shadow-lg"
                    src="/static/img/avatars/avatar-jumbo-1.jpg"
                    alt="..."
                  />
                </div>
                <div className="img-grid-item">
                  {/* Image */}
                  <img
                    className="img-fluid rounded-top-start rounded-bottom-end shadow-lg"
                    src="/static/img/avatars/avatar-2.jpg"
                    alt="..."
                  />
                </div>
                <div className="img-grid-item">
                  {/* Image */}
                  <img
                    className="img-fluid rounded-top-start rounded-bottom-end shadow-lg"
                    src="/static/img/avatars/avatar-8.jpg"
                    alt="..."
                  />
                </div>
                <div className="img-grid-item">
                  {/* Image */}
                  <img
                    className="img-fluid rounded-top-start rounded-bottom-end shadow-lg"
                    src="/static/img/avatars/avatar-10.jpg"
                    alt="..."
                  />
                </div>
                <div className="img-grid-item">
                  {/* Image */}
                  <img
                    className="img-fluid rounded-top-start rounded-bottom-end shadow-lg"
                    src="/static/img/avatars/avatar-6.jpg"
                    alt="..."
                  />
                </div>
                <div className="img-grid-item">
                  {/* Image */}
                  <img
                    className="img-fluid rounded-top-start rounded-bottom-end shadow-lg"
                    src="/static/img/avatars/avatar-4.jpg"
                    alt="..."
                  />
                </div>
                <div className="img-grid-item">
                  {/* Image */}
                  <img
                    className="img-fluid rounded-top-start rounded-bottom-end shadow-lg"
                    src="/static/img/avatars/avatar-3.jpg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 order-md-0 text-center text-md-start">
              {/* Heading */}
              <h2 className="display-4 mb-6">
                Applications & Visas Assistance
              </h2>

              {/* Text */}

              <p className="text-muted mb-0">
                Our primary education consulting services are focused on helping
                with university admission and visa processing. Preparation of
                documents often takes a lot of time and effort, requiring
                government checks and approvals. Choosing Goajo consulting
                services for education, you delegate to our specialists most of
                the paperwork, which allows you to save a lot of resources. Pay
                attention to your future trip and studying abroad because taking
                care of applications and visas is our job!
              </p>
            </div>
          </div>
        </div>
        {/* THESIS WRITING SERVICE */}
      </section>
      <section className="pt-10 pt-md-12">
        <div className="container-lg">
          <div className="row md-reverse align-items-center justify-content-between">
            <div className="col-md-5 align-center">
              {/* Card */}
              <div className="position-relative">
                {/* Decoration */}
                <div className="position-absolute top-center top-md-start text-warning mt-n8 ms-md-n8">
                  <AboutSvg />
                </div>

                {/* Card */}

                <div className="header-img ptw">
                  <div className="header-img-overlay" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 text-center text-md-start">
              {/* Heading */}
              <h2 className="display-4 mb-4">
                Project and thesis{" "}
                <span className="text-underline-warning">write up</span>
              </h2>

              {/* Text */}
              <p className="text-muted">
                Our custom thesis writing service consists a team of
                professional thesis paper and dissertation writers. All domain
                who can very well handle the complexities in academic writing.
                As well as, we work towards your requirements on how the thesis
                should be and improve our best thesis writing and editing
                services in line with your specifications. In order to,
                regardless of single order or multiple orders, we value each and
                every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 py-5 py-md-5 bg-light" id="services">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 text-center">
              {/* Divider */}
              <hr className="hr-sm bg-white-20 mx-auto mb-10 mb-md-12" />

              {/* Heading */}
              <h2 className="display-4 text-dark mb-9 mb-md-10">
                Here is how our digital marketing, web design &{" "}
                <span className="text-underline text-underline-primary-dark">
                  creative services
                </span>{" "}
                Helps You.
              </h2>
            </div>
          </div>
          <div className="row mt-n8 mt-md-n9">
            <div className="col-md-6 col-lg-4">
              {/* Item */}
              <div className="d-flex mt-8 mt-md-9">
                {/* Icon */}
                <div className="icon text-primary-dark">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <path
                        d="M16.374 19.939l5.849-8.773A.75.75 0 0021.599 10H17V4.477a.75.75 0 00-1.374-.416l-5.849 8.773A.75.75 0 0010.401 14H15v5.523a.75.75 0 001.374.416z"
                        fill="#335EEA"
                      ></path>
                      <path
                        d="M4.5 5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm0 12h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm-2-6h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 010-3z"
                        fill="#335EEA"
                        opacity=".3"
                      ></path>
                    </g>
                  </svg>
                </div>

                {/* Body */}
                <div className="ms-5">
                  {/* Title */}
                  <p className="fs-lg fw-bold text-dark mb-1">Web design</p>

                  {/* Text */}
                  <p className="fs-sm text-dark-60 mb-0">
                    Your website is the first interaction people have with your
                    business, our creative, innovative and effective websites
                    helps capture your brand, improve your conversion rates, and
                    maximize your revenue to help grow your business and achieve
                    your goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              {/* Item */}
              <div className="d-flex mt-8 mt-md-9">
                {/* Icon */}
                <div className="icon text-primary-dark">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z" />
                      <path
                        d="M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z"
                        fill="#335EEA"
                        opacity=".3"
                      />
                      <path
                        d="M11 16a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z"
                        fill="#335EEA"
                      />
                    </g>
                  </svg>
                </div>

                {/* Body */}
                <div className="ms-5">
                  {/* Title */}
                  <p className="fs-lg fw-bold text-dark mb-1">
                    Search Engine Optimization
                  </p>

                  {/* Text */}
                  <p className="fs-sm text-dark-60 mb-0">
                    Fundamentally, we are SEO scientists, constantly testing
                    Google’s algorithm to learn more about it, we optimize your
                    brand for visibility on google and help increase your
                    revenue with campaign tailored for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              {/* Item */}
              <div className="d-flex mt-9">
                {/* Icon */}
                <div className="icon text-primary-dark">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z" />
                      <path
                        d="M22 15.01l.025-.01v4.586a1 1 0 01-1.707.707L18.025 18H5a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v9.01zM6.168 10.555C7.678 12.819 9.646 14 12 14c2.354 0 4.322-1.18 5.832-3.445a1 1 0 10-1.664-1.11C15.01 11.181 13.646 12 12 12c-1.646 0-3.01-.82-4.168-2.555a1 1 0 00-1.664 1.11z"
                        fill="#335EEA"
                      />
                    </g>
                  </svg>
                </div>

                {/* Body */}
                <div className="ms-5">
                  {/* Title */}
                  <p className="fs-lg fw-bold text-dark mb-1">
                    Graphics Design
                  </p>

                  {/* Text */}
                  <p className="fs-sm text-dark-60 mb-0">
                    Our designs allow you to freely project your ideas and
                    visually communicate with your target audience by combining
                    Art and Technology through images, text, and color, to
                    achieve artistic or decorative effects and transform data
                    into visual graphics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <TestimonialSlider id="testimonials" />
    </>
  );
}
