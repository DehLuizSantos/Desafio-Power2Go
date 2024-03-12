import * as S from './styles';
import Logo from '../../../assets/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.ContainerHeader>
        <button>
          <img src={Logo} alt="André Luiz Santos" />
        </button>
        <h1>EContries</h1>
      </S.ContainerHeader>
    </S.HeaderWrapper>
  );
};

export default Header;
