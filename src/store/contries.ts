import { create } from 'zustand';
import { ContryCardProps } from '../components/atomos/ContriesCard';
import { useContries } from '../hooks/contries';

interface ContrieStoreType {
  contries: ContryCardProps[];
  setContries: (contries: ContryCardProps[]) => void;
}

export const useContriesStore = create<ContrieStoreType>()((set) => ({
  contries: [],
  setContries: (contries: ContryCardProps[]) => set(() => ({ contries: contries })),
}));
