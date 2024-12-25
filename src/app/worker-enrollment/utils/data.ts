import { IFormaData, ITeamsGroup } from './interfaces';

export const formData: IFormaData = {
  fullName: "",
  church: "",
  whatsapp: "",
  instagram: "",
  foodRestriction: "",
  team: {
    firstOption: "",
    secondOption: "",
    thirdOption: "",
  }
};

export const teamsGroup: ITeamsGroup = {
  fisrtTeamsGroup: [
    'Bandinha',
    'Biscoito',
    'Boa Vontade',
    'Círculos',
    'Cozinha',
    'Decoração',
    'Trânsito',
  ],
  secondTeamsGroup: [
    'Ordem',
    'Artes',
    'Liturgia',
    'Roteiro',
    'Sonoplastia',
    'Fotografia',
    'Vigília'
  ],
  thirdTeamsGroup: [
    'Garçons',
    'Correios',
    'Infraestrutura',
    'Secretaria/externa',
    'Minemercado',
    'Saúde',
    'Recepção dos palestrantes',
  ],
};
