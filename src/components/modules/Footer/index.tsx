import SocialMediaIcon from '../../atomos/SocialMediaIcon';
import * as S from './styles';
import Instagram from '../../../assets/instagram.svg';
import Linkedin from '../../../assets/linkdn.svg';
import GitHub from '../../../assets/github.svg';

const Footer = () => {
  const socialMedias = [
    {
      name: 'github',
      icon: GitHub,
      link: 'https://github.com/DehLuizSantos',
      id: 1,
    },
    {
      name: 'instagram',
      icon: Instagram,
      link: 'https://www.instagram.com/and_bas7/',
      id: 2,
    },
    {
      name: 'linkedin',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/andr%C3%A9-luiz-636468244/',
      id: 3,
    },
  ];
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <span>©2024 André Luiz. ALL RIGHTS RESERVED.</span>
        <div className="social-media-wrapper">
          {socialMedias.map((socialMedia) => (
            <SocialMediaIcon key={socialMedia.id} {...socialMedia} />
          ))}
        </div>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
