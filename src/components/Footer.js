import React from 'react';
import { Footer as StyledFooter, FooterText, FooterLink } from '../styles/GlobalStyles';

/**
 * Footer component with attribution
 */
const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Made with ❤️ by{' '}
        <FooterLink href="mailto:mvsdarshankar@gmail.com">
          Manoj
        </FooterLink>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
