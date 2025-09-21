import { ReactNode } from 'react';

export interface CardProps {
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  description: string;
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}