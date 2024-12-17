import { ReactComponent as InstagramLogo } from './icons/instagram.svg';
import { ReactComponent as LinkedInLogo } from './icons/linkedIn.svg';

export type SocialLink = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'instagram',
    icon: <InstagramLogo />,
    link: 'https://www.instagram.com/sasha_dmii/',
  },
  {
    name: 'linkedIn',
    icon: <LinkedInLogo />,
    link: 'https://www.linkedin.com/in/oleksandrarychka/',
  },
];
