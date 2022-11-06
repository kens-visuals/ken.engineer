import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const buttonHover = {
  y: -10,
  color: '#fdd369',
  border: '1px dashed #fdd369',
  backgroundColor: 'transparent',
};
