import { Product } from './types';

export const products: Product[] = [
  {
    id: 'darth-vader-maul',
    name: 'Darth Vader vs Darth Maul',
    description: 'Epic Star Wars duel captured in bleach art. Features Vader and Maul in an iconic confrontation with dramatic splatter effects.',
    category: 'pop-culture',
    price: 34.99,
    images: {
      main: '/products/darth-vader-maul-main.jpg',
      gallery: [
        '/products/darth-vader-maul-front.jpg',
        '/products/darth-vader-maul-back.jpg',
        '/products/darth-vader-maul-detail.jpg',
      ],
    },
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableShirtColors: ['navy', 'black'],
    bleachColor: 'pastel-orange',
    inStock: true,
    featured: true,
    tags: ['star-wars', 'sith', 'movie', 'sci-fi'],
  },
  {
    id: 'cannabis-leaf-mandala',
    name: 'Cannabis Leaf Mandala',
    description: 'Intricate mandala design featuring cannabis leaves in a symmetrical pattern. Perfect blend of nature and art.',
    category: 'cannabis-nature',
    price: 32.99,
    images: {
      main: '/products/cannabis-mandala-main.jpg',
      gallery: [
        '/products/cannabis-mandala-front.jpg',
        '/products/cannabis-mandala-detail.jpg',
      ],
    },
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    availableShirtColors: ['navy', 'black'],
    bleachColor: 'vibrant-tan',
    inStock: true,
    featured: true,
    tags: ['cannabis', 'mandala', 'nature', 'botanical'],
  },
  {
    id: 'abstract-galaxy',
    name: 'Abstract Galaxy Burst',
    description: 'Cosmic explosion of bleach creating a mesmerizing galaxy effect. Each shirt is unique due to the organic bleaching process.',
    category: 'abstract',
    price: 29.99,
    images: {
      main: '/products/abstract-galaxy-main.jpg',
      gallery: [
        '/products/abstract-galaxy-front.jpg',
        '/products/abstract-galaxy-back.jpg',
      ],
    },
    availableSizes: ['M', 'L', 'XL', '2XL'],
    availableShirtColors: ['navy', 'black'],
    bleachColor: 'pastel-orange',
    inStock: true,
    featured: false,
    tags: ['abstract', 'galaxy', 'cosmic', 'unique'],
  },
  {
    id: 'pot-leaf-classic',
    name: 'Classic Pot Leaf',
    description: 'Bold and simple cannabis leaf design. A timeless statement piece for cannabis enthusiasts.',
    category: 'cannabis-nature',
    price: 28.99,
    images: {
      main: '/products/pot-leaf-main.jpg',
      gallery: [
        '/products/pot-leaf-front.jpg',
      ],
    },
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableShirtColors: ['navy', 'black'],
    bleachColor: 'vibrant-tan',
    inStock: true,
    featured: false,
    tags: ['cannabis', 'simple', 'classic'],
  },
];

export const categories = [
  { id: 'pop-culture', name: 'Pop Culture', description: 'Movie, TV, and gaming inspired designs' },
  { id: 'cannabis-nature', name: 'Cannabis & Nature', description: 'Botanical and nature themes' },
  { id: 'abstract', name: 'Abstract Art', description: 'Unique artistic expressions' },
  { id: 'custom', name: 'Custom Orders', description: 'Request your own design' },
];
