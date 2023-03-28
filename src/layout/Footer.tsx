import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer_section">
      <div>
        <CopyrightIcon id="copyright_icon" /> Mercedesz. All rights reserved
      </div>
      <ul>
        <li>
          <Link to="https://www.linkedin.com/in/mercedesz-torok-zy/" target="_blank">
            <LinkedInIcon className="footer_icon" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/Thenshy0" target="_blank">
            <GitHubIcon className="footer_icon" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
