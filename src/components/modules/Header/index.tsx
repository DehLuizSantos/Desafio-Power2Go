import * as S from './styles';
import Logo from '../../../assets/Logo.svg';
import LogoEcontries from '../../../assets/Econtries.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.ContainerHeader>
        <button>
          <img src={Logo} alt="André Luiz Santos" />
        </button>
        <img src={LogoEcontries} alt="Econtries" />
      </S.ContainerHeader>
    </S.HeaderWrapper>
  );
};

export default Header;
