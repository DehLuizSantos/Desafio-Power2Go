import CountryCard, { ContryCardProps } from '../../atomos/ContriesCard';
import * as S from './styles';

type ContriesByRegionProps = {
  data: ContryCardProps[] | undefined;
};

const ContriesByRegion = ({ data }: ContriesByRegionProps) => {
  return (
    <S.ContriesByRegionWrapper>
      {data?.map((contrie, index) => (
        <CountryCard {...contrie} key={index} />
      ))}
    </S.ContriesByRegionWrapper>
  );
};

export default ContriesByRegion;
