import { useNavigate } from 'react-router-dom';
import * as S from './styles';

type SocialMediaProps = {
  name: string;
  icon: string;
  link: string;
};
const SocialMediaIcon = ({ icon, name, link }: SocialMediaProps) => {
  const navigate = useNavigate();
  return (
    <S.SocialMediaWrapper>
      <button onClick={() => navigate(link)}>
        <img src={icon} alt={name} />
      </button>
    </S.SocialMediaWrapper>
  );
};

export default SocialMediaIcon;
