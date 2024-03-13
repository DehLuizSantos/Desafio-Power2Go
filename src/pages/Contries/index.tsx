import CountryCard from '../../components/atomos/ContriesCard';
import ContriesByRegion from '../../components/molecules/ContriesByRegion';
import ContriesFilters from '../../components/organisms/ContriesFilters';
import { useContries } from '../../hooks/contries';
import * as S from './styles';

export const Contries = () => {
  const { data, isLoading } = useContries();

  return (
    <S.ContriesWrapper>
      <h2>Contries</h2>
      {isLoading ? <p>loading</p> : <ContriesFilters data={data} />}
    </S.ContriesWrapper>
  );
};
