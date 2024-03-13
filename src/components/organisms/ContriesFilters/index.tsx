import { ContryCardProps } from '../../atomos/ContriesCard';
import ContriesByRegion from '../../molecules/ContriesByRegion';
import * as S from './styles';

type ContriesFiltersProps = {
  data: ContryCardProps[] | undefined;
};

const ContriesFilters = ({ data }: ContriesFiltersProps) => {
  return (
    <S.ContriesFiltersWrapper>
      <h2>Contries filters</h2>
      <ContriesByRegion data={data} />
    </S.ContriesFiltersWrapper>
  );
};
export default ContriesFilters;
