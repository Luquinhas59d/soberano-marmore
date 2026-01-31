
import { Material, MaterialCategory, Project } from './types';

export const COLORS = {
  midnight: '#0F172A',
  marble: '#F8FAFC',
  gold: '#D4AF37'
};

export const MATERIALS: Material[] = [
  { 
    id: '1', 
    name: 'Carrara Gióia', 
    category: MaterialCategory.MARBLE, 
    origin: 'Itália', 
    image: 'https://i.pinimg.com/736x/fa/b4/3f/fab43f322301be6817d85e3f1ce799cd.jpg', 
    description: 'O suprassumo do mármore clássico. Fundo branco gélido com veios cinza finos e elegantes.' 
  },
  { 
    id: '2', 
    name: 'Black Fusion', 
    category: MaterialCategory.GRANITE, 
    origin: 'Brasil', 
    image: 'https://www.quartzite-stone.com/wp-content/uploads/2023/04/2.BlackFusion_1654764184466.BlackFusion-1.jpg', 
    description: 'Um granito exótico que parece uma obra de arte abstrata com veios dourados sobre fundo negro.' 
  },
  { 
    id: '3', 
    name: 'Calacatta Quartz', 
    category: MaterialCategory.QUARTZ_STONE, 
    origin: 'Engenharia', 
    image: 'https://casadomarmore-es.com.br/wp-content/uploads/2021/01/CALACATA-1.jpg', 
    description: 'A perfeição estética do Calacatta com resistência tecnológica impenetrável.' 
  },
  { 
    id: '4', 
    name: 'Preto São Gabriel', 
    category: MaterialCategory.GRANITE, 
    origin: 'Brasil', 
    image: 'https://minaspedrasbtu.com.br/wp-content/uploads/2021/04/IlhaemPretoSaoGabriel-1.jpg', 
    description: 'O clássico brasileiro. Resistência extrema, grão uniforme e brilho intenso para cozinhas.' 
  },
  { 
    id: '5', 
    name: 'Travertino Romano', 
    category: MaterialCategory.MARBLE, 
    origin: 'Itália', 
    image: 'https://marmorariaabrantes.com.br/wp-content/uploads/2025/07/lavabo-marmore-travertino-romano-bruto.jpg', 
    description: 'A pedra eterna do Coliseu. Tons bege e terrosos com texturas naturais únicas.' 
  },
  { 
    id: '6', 
    name: 'Taj Mahal', 
    category: MaterialCategory.QUARTZITE, 
    origin: 'Brasil', 
    image: 'https://marmorariaabrantes.com.br/wp-content/uploads/2025/07/ilha-quartzito-taj-mahal.jpg', 
    description: 'O quartzito brasileiro mais cobiçado no mundo. Beleza de mármore com resistência superior ao granito.' 
  },
  { 
    id: '7', 
    name: 'Branco Paraná', 
    category: MaterialCategory.MARBLE, 
    origin: 'Brasil', 
    image: 'https://static.wixstatic.com/media/1286eb_424fe77cd7c047e591898484d25dea85~mv2.jpg/v1/fill/w_774,h_1032,al_c,q_85,enc_avif,quality_auto/1286eb_424fe77cd7c047e591898484d25dea85~mv2.jpg', 
    description: 'O "Carrara Brasileiro". Sofisticação nacional com veios marcantes e fundo claro cristalino.' 
  },
  { 
    id: '8', 
    name: 'Nero Marquina', 
    category: MaterialCategory.MARBLE, 
    origin: 'Espanha', 
    image: 'https://i.pinimg.com/736x/da/55/17/da5517a40581a5609bb16cf802e12148.jpg', 
    description: 'Preto profundo com veios brancos elétricos. Dramático, luxuoso e imponente.' 
  },
  { 
    id: '9', 
    name: 'Verde Ubatuba', 
    category: MaterialCategory.GRANITE, 
    origin: 'Brasil', 
    image: 'https://casaeconstrucao.vivadecora.com.br/wp-content/uploads/2019/12/cozinha-e-fogao-verde-ubatuba-Fonte-Pinterest.jpg', 
    description: 'Um clássico mundial. Verde escuro quase preto, perfeito para áreas de alto tráfego e churrasqueiras.' 
  },
  { 
    id: '10', 
    name: 'Branco Itaúnas', 
    category: MaterialCategory.GRANITE, 
    origin: 'Brasil', 
    image: 'https://lp.dsmarmoraria.com.br/wp-content/uploads/2023/03/granito-branco-e1679861437780.png', 
    description: 'O granito claro mais amado do Brasil. Pontilhado suave que lembra areia fina.' 
  },
  { 
    id: '11', 
    name: 'Crema Marfil', 
    category: MaterialCategory.MARBLE, 
    origin: 'Espanha', 
    image: 'https://i.pinimg.com/736x/9a/5c/16/9a5c16bdb854bde007ba9bd487c9d838.jpg', 
    description: 'O bege perfeito. Uniformidade e elegância para pisos e banheiros de estilo clássico.' 
  },
  { 
    id: '12', 
    name: 'Preto Absoluto', 
    category: MaterialCategory.GRANITE, 
    origin: 'Índia', 
    image: 'https://i.pinimg.com/736x/9e/ef/f9/9eeff99f01605b02356f0a27f1918cbc.jpg', 
    description: 'Homogeneidade total. O preto mais puro para projetos minimalistas e modernos.' 
  },
  { 
    id: '13', 
    name: 'Mont Blanc', 
    category: MaterialCategory.QUARTZITE, 
    origin: 'Brasil', 
    image: 'https://i.pinimg.com/236x/21/4e/f7/214ef7c0cb27e179c3d9c55e9f6cebf8.jpg', 
    description: 'A resistência do quartzito com a estética branca leitosa do mármore mais nobre.' 
  },
  { 
    id: '14', 
    name: 'Bege Bahia', 
    category: MaterialCategory.MARBLE, 
    origin: 'Brasil', 
    image: 'https://i.pinimg.com/736x/63/b7/94/63b79425e77c39fb1907e881d4b1d541.jpg', 
    description: 'Também chamado de Travertino Nacional. Aspecto rústico, natural e muito acolhedor.' 
  },
  { 
    id: '15', 
    name: 'Cinza Andorinha', 
    category: MaterialCategory.GRANITE, 
    origin: 'Brasil', 
    image: 'https://i.pinimg.com/736x/9b/17/ad/9b17ad688e094000b08d76064337e6a1.jpg', 
    description: 'Durabilidade extrema e excelente custo-benefício. O cinza clássico das obras contemporâneas.' 
  },
  { 
    id: '16', 
    name: 'Azul Macaúbas', 
    category: MaterialCategory.QUARTZITE, 
    origin: 'Brasil', 
    image: 'https://www.eagledecoracoes.com.br/wp-content/uploads/2023/02/D_NQ_NP_2X_726629-MLB50423556441_062022-F.webp', 
    description: 'Uma das pedras mais raras do mundo. Azul natural vibrante que transforma qualquer ambiente em joia.' 
  },
  { 
    id: '17', 
    name: 'Branco Siena', 
    category: MaterialCategory.GRANITE, 
    origin: 'Brasil', 
    image: 'https://i.pinimg.com/736x/16/92/d6/1692d6241d705749f6edb202ca92d009.jpg', 
    description: 'Alternativa clara e econômica com granulação fina e acinzentada, muito versátil.' 
  },
  { 
    id: '18', 
    name: 'Marrom Imperial', 
    category: MaterialCategory.MARBLE, 
    origin: 'Espanha', 
    image: 'https://i.pinimg.com/736x/63/2a/f6/632af666b209ba9fbf7c307cae0e06f9.jpg', 
    description: 'Chocolate profundo com veios dourados sutis. Sinônimo de requinte e sobriedade.' 
  },
  { 
    id: '19', 
    name: 'Branco Piguês', 
    category: MaterialCategory.MARBLE, 
    origin: 'Grécia', 
    image: 'https://i.pinimg.com/1200x/ab/13/15/ab1315a0ef2c1165be2c56ac25d95f26.jpg', 
    description: 'Branco leitoso com veios pontuais. A pureza e a luz do mármore grego original.' 
  },
  { 
    id: '20', 
    name: 'Perla Venata', 
    category: MaterialCategory.QUARTZITE, 
    origin: 'Brasil', 
    image: 'https://www.litosonline.com/sites/default/files/inline-images/image_10.jpeg', 
    description: 'Suave, com fundo creme e veios sutis. O equilíbrio perfeito entre beleza e dureza.' 
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Cozinha Gourmet Contemporânea',
    category: 'Cozinha',
    location: 'Terras de São José II, Itu',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'p2',
    title: 'Banho Master Spa',
    category: 'Banheiro',
    location: 'Helvetia Park, Indaiatuba',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'p3',
    title: 'Área Social Integrada',
    category: 'Área Gourmet',
    location: 'Residencial Moutonnée, Salto',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80'
  }
];
