import React from 'react';
import './ContactInfo.css';
import {theme1, facebook_d, instagram_d} from '../../assets/constants/themes';
/* Components */
import ContactLink from './functionalComponents/ContactLink/ContactLink';
import Email from 'material-ui/svg-icons/communication/email';

export default function ContactInfo(){
  const {lightColor} =  theme1;
  const iconColor = lightColor;
  return (
    <nav className='contact-info'>
      <ContactLink
        href={'https://urlgeni.us/facebook/jR2M'/*'https://eyi9.app.link/qdWcRHiRbL'*/}
        isCustomSvg={true}
        pathAttributes={{d: facebook_d}}
        color={iconColor}
        target="_target"
      />
      <ContactLink href={'mailto:marissa.newleadonlife@gmail.com'}>
        <Email color={iconColor}/>
      </ContactLink>
      <ContactLink
        href={'https://urlgeni.us/instagram/o5rY'/*'https://eyi9.app.link/LIzxsJ1QbL'*/}
        isCustomSvg={true}
        pathAttributes={{d: instagram_d}}
        color={iconColor}
        target="_target"
      />
    </nav>
  );
}
