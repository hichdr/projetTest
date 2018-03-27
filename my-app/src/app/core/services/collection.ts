import { Item } from '../../shared/models/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: '1',
    name: 'toto',
    reference: '',
    state: State.ALIVRER
  },
  {
    id: '2',
    name: 'titi',
    reference: '',
    state: State.ENCOURS
  },
  {
    id: '3',
    name: 'tata',
    reference: '',
    state: State.LIVREE
  }
];
