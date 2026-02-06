
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}