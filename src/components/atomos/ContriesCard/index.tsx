import { Link } from 'react-router-dom';
import * as S from './styles';

export type ContryCardProps = {
  name: string;
  flags: string;
  population: number;
  region: string;
  capital: string;
};

function CountryCard({ name, flags, population, region, capital }: ContryCardProps) {
  return (
    <S.ContriesCardWrapper>
      <img src={flags} alt={name} />
      <S.CardText>
        <h3 className="card-title">{name}</h3>
        <p>População: {population.toLocaleString('pt-BR')}</p>
        <p>Região: {region}</p>
        <p>Capital: {capital}</p>
      </S.CardText>
    </S.ContriesCardWrapper>
  );
}

export default CountryCard;
