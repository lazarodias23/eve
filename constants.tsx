
import React from 'react';
import { 
  Zap, 
  Settings, 
  Droplets, 
  Cpu, 
  Tool, 
  CheckCircle2, 
  Users, 
  Factory,
  Wrench
} from 'lucide-react';
import { Service, Partner, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Instalações Elétricas Rurais',
    description: 'Projetos robustos e seguros dimensionados especificamente para a demanda do campo.',
    icon: <Zap className="w-8 h-8 text-accent" />
  },
  {
    id: '2',
    title: 'Automação de Aviários',
    description: 'Controle total de ambiência, alimentação e iluminação para maximizar a produtividade.',
    icon: <Cpu className="w-8 h-8 text-accent" />
  },
  {
    id: '3',
    title: 'Automação de Suinocultura',
    description: 'Sistemas inteligentes para manejo preciso e redução de desperdícios no plantel.',
    icon: <Settings className="w-8 h-8 text-accent" />
  },
  {
    id: '4',
    title: 'Montagem de Painéis',
    description: 'Quadros de comando com componentes de alta qualidade e proteção total.',
    icon: <Factory className="w-8 h-8 text-accent" />
  },
  {
    id: '5',
    title: 'Manutenção e Melhorias',
    description: 'Suporte técnico ágil para garantir que sua produção nunca pare por falhas elétricas.',
    icon: <Wrench className="w-8 h-8 text-accent" />
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Plasson', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80' },
  { name: 'Schneider', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80' },
  { name: 'WEG', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80' },
  { name: 'Cofas', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80' }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Automação Aviário Granja Silva',
    description: 'Redução de 15% no consumo de energia e melhor conversão alimentar.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop&q=80',
    category: 'Aviário'
  },
  {
    id: 2,
    title: 'Painéis de Comando Industrial',
    description: 'Montagem de 4 painéis de alta complexidade para setor de suínos.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?w=800&h=600&fit=crop&q=80',
    category: 'Painéis'
  },
  {
    id: 3,
    title: 'Retrofitting Suinocultura Sul',
    description: 'Modernização completa de sistema elétrico com automação IoT.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80',
    category: 'Suínos'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Mendes',
    role: 'Produtor de Aves',
    content: 'O trabalho da Eletro Alves transformou nossa granja. A automação trouxe uma tranquilidade que não tínhamos.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Ana Paula Rocha',
    role: 'Engenheira Agrônoma',
    content: 'Profissionalismo impecável. Os painéis montados pela equipe são extremamente organizados e seguros.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Carlos Alberto',
    role: 'Gestor de Fazenda',
    content: 'Rapidez no atendimento e soluções que realmente funcionam no dia a dia do campo.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80'
  }
];
