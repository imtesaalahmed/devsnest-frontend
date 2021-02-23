import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-side">
          <div className="mb-2">
            We aim to make young India financially self-sustainable by providing
            equal opportunity for all.
          </div>

          <a
            href="https://drive.google.com/file/d/17TKzId-5qlRjKVLX30W1Brn_L70rcMN1/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark font-weight-bold text-decoration-none"
          >
            Privacy Policy
          </a>
        </div>

        <div className="right-side">
          <div>
            Contact us:{' '}
            <a
              href="mailto:support@devsnest.in"
              target="__blank"
              className="text-dark font-weight-bold text-decoration-none"
            >
              support@devsnest.in
            </a>
          </div>
          <div className="mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://in.linkedin.com/company/devsnest/"
              className="h3 text-dark ml-2"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/devsnest/"
              className="h3 text-dark ml-2"
            >
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/devsnest.in/"
              className="h3 text-dark ml-2"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
