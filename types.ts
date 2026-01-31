
export enum MaterialCategory {
  AGLOSTONE = 'Aglostone',
  CAESARSTONE = 'Caesarstone',
  DEKTON = 'Dekton',
  GRANITE = 'Granito',
  LIMESTONE = 'Limestone',
  MARBLE = 'Mármore',
  NEOLITH = 'Neolith',
  ONYX = 'Ônix',
  QUARTZITE = 'Quartzito',
  QUARTZ_STONE = 'Quartzo Stone',
  SILESTONE = 'Silestone'
}

export interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  origin: string;
  image: string;
  description: string;
  combinations?: string[];
  features?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Cozinha' | 'Banheiro' | 'Área Gourmet' | 'Comercial';
  image: string;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
