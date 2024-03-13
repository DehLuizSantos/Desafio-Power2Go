import { useStore } from 'zustand';
import CountryCard, { ContryCardProps } from '../../atomos/ContriesCard';
import * as S from './styles';
import { useContriesStore } from '../../../store/contries';

type ContriesByRegionProps = {
  data: ContryCardProps[] | undefined;
};

const ContriesByRegion = ({ data }: ContriesByRegionProps) => {
  const { contries } = useStore(useContriesStore);
  console.log(contries, 'aqui');

  return (
    <S.ContriesByRegionWrapper>
      {data?.map((contrie, index) => (
        <CountryCard {...contrie} key={index} />
      ))}
    </S.ContriesByRegionWrapper>
  );
};

export default ContriesByRegion;
