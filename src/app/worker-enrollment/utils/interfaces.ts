type fisrtTeamsGroup = 'Bandinha' | 'Biscoito' | 'Boa Vontade' | 'Círculos' | 'Cozinha' | 'Decoração' | 'Trânsito';
type secondTeamsGroup = 'Ordem' | 'Artes' | 'Liturgia' | 'Roteiro' | 'Sonoplastia' | 'Fotografia' | 'Vigília';
type thirdTeamsGroup =  'Garçons' | 'Correios' | 'Infraestrutura' | 'Secretaria/externa' | 'Minemercado' | 'Saúde' | 'Recepção dos palestrantes';

export interface IFormaData {
  fullName: string
  church: string
  whatsapp: string
  instagram: string
  foodRestriction: string
  team: {
    firstOption: string
    secondOption: string
    thirdOption: string
  }
}

export interface ITeamsGroup {
  fisrtTeamsGroup: Array<fisrtTeamsGroup>
  secondTeamsGroup: Array<secondTeamsGroup>
  thirdTeamsGroup: Array<thirdTeamsGroup>
}