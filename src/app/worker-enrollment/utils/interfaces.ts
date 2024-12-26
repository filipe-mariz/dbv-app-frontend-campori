type fisrtTeamsGroup = 'Bandinha' | 'Biscoito' | 'Boa Vontade' | 'Círculos' | 'Cozinha' | 'Decoração' | 'Trânsito';
type secondTeamsGroup = 'Ordem' | 'Artes' | 'Liturgia' | 'Roteiro' | 'Sonoplastia' | 'Fotografia' | 'Vigília';
type thirdTeamsGroup =  'Garçons' | 'Correios' | 'Infraestrutura' | 'Secretaria/externa' | 'Minemercado' | 'Saúde' | 'Recepção dos palestrantes';

export interface IFormaData {
  id: string
  name: string
  club_id: string
}

export interface ITeamsGroup {
  fisrtTeamsGroup: Array<fisrtTeamsGroup>
  secondTeamsGroup: Array<secondTeamsGroup>
  thirdTeamsGroup: Array<thirdTeamsGroup>
}