import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CountryData } from '../interfaces/contries';
import { ContryCardProps } from '../components/atomos/ContriesCard';

const endpoint = 'https://restcountries.com/v3.1/all';

export function useContries() {
  return useQuery({
    queryKey: ['contries'],
    queryFn: async () => {
      const { data } = await axios.get(endpoint);

      const formatData: ContryCardProps[] = data.map((contries: CountryData) => {
        return {
          name: contries.name.common,
          flags: contries.flags.svg,
          population: contries.population,
          region: contries.region,
          capital: contries.capital,
        };
      });

      return formatData;
    },
  });
}
