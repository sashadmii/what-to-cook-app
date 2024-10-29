import { socialLinks } from '../../constants';
import { ReactComponent as MailLogo } from '../../icons/mail.svg';

function Footer(): JSX.Element {
  return (
    <footer className="flex sm:flex-col lg:flex-row w-full bg-plaster p-8 mt-24 m-0">
      <div className="sm:text-center lg:text-start lg:w-3/4 sm:mb-5 lg:mb-0">
        <h3 className="font-serifFont text-3xl mb-2">Made by:</h3>
        <div>Oleksandra Rychka</div>
        <p>July, 2024</p>
      </div>

      <div className="sm:text-center lg:text-end lg:w-1/4 ">
        <h3 className="font-serifFont text-3xl mb-2">Contact Me:</h3>
        <div className="flex gap-5 sm:justify-center lg:justify-end">
          {socialLinks.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              key={link.name}>
              {link.icon}
            </a>
          ))}
          <a href="mailto:alexandra.rychka@gmail.com">
            <MailLogo
              className="w-6 hover:text-caramel hover:scale-125 transition ease-in-out 
        duration-500 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
