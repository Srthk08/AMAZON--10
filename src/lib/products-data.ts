// Simple products data for build
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  category: 'restaurant' | 'mobile' | 'tv' | 'web';
  base_price: number;
  featured_image: string;
  gallery: string[];
  features: string[];
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

// Mock products data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Restaurant Management System',
    slug: 'restaurant-management-system',
    description: 'Complete restaurant management solution with POS, inventory, and customer management.',
    short_description: 'Complete restaurant management solution with POS, inventory, and customer management.',
    category: 'restaurant',
    base_price: 25000,
    featured_image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    gallery: [],
    features: ['POS System', 'Inventory Management', 'Customer Management', 'Order Tracking'],
    is_active: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Custom mobile applications for iOS and Android platforms.',
    short_description: 'Custom mobile applications for iOS and Android platforms.',
    category: 'mobile',
    base_price: 50000,
    featured_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    gallery: [],
    features: ['iOS App', 'Android App', 'Cross-platform', 'App Store Submission'],
    is_active: true,
    sort_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Smart TV Application',
    slug: 'smart-tv-application',
    description: 'Interactive applications for smart TV platforms.',
    short_description: 'Interactive applications for smart TV platforms.',
    category: 'tv',
    base_price: 35000,
    featured_image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    gallery: [],
    features: ['Smart TV App', 'Remote Control Support', 'Streaming Integration', 'User Interface'],
    is_active: true,
    sort_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Web Application',
    slug: 'web-application',
    description: 'Modern web applications with responsive design and advanced features.',
    short_description: 'Modern web applications with responsive design and advanced features.',
    category: 'web',
    base_price: 30000,
    featured_image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    gallery: [],
    features: ['Responsive Design', 'Modern UI/UX', 'Database Integration', 'SEO Optimized'],
    is_active: true,
    sort_order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const getProducts = async (): Promise<Product[]> => {
  return mockProducts;
};

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  return mockProducts.find(product => product.slug === slug) || null;
};

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => product.category === category);
};

export const getProductPlans = async (productId: string) => {
  return [
    {
      id: '1',
      product_id: productId,
      name: 'Basic Plan',
      description: 'Essential features for small businesses',
      price: 15000,
      features: ['Basic Features', 'Email Support'],
      delivery_days: 1,
      is_popular: false,
      sort_order: 1,
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      product_id: productId,
      name: 'Pro Plan',
      description: 'Advanced features for growing businesses',
      price: 25000,
      features: ['All Basic Features', 'Advanced Features', 'Priority Support'],
      delivery_days: 1,
      is_popular: true,
      sort_order: 2,
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      product_id: productId,
      name: 'Enterprise Plan',
      description: 'Complete solution for large enterprises',
      price: 50000,
      features: ['All Pro Features', 'Custom Development', '24/7 Support', 'Dedicated Manager'],
      delivery_days: 2,
      is_popular: false,
      sort_order: 3,
      created_at: new Date().toISOString()
    }
  ];
};