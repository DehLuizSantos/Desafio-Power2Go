import CountryCard from '../../components/atomos/ContriesCard';
import ContriesByRegion from '../../components/molecules/ContriesByRegion';
import { useContries } from '../../hooks/contries';
import * as S from './styles';

export const Contries = () => {
  const { status, data, error, isFetching, isLoading } = useContries();
  console.log(data);

  return (
    <S.ContriesWrapper>
      <h2>Contries</h2>
      {isLoading ? <p>loading</p> : <ContriesByRegion data={data} />}
    </S.ContriesWrapper>
  );
};
