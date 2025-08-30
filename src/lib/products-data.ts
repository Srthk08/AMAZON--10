// Products Data - Static product information for the website
// This ensures product pages display content even without database connection

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

export interface ProductPlan {
  id: string;
  product_id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  delivery_days: number;
  is_popular: boolean;
  sort_order: number;
  created_at: string;
}

// Static products data
export const products: Product[] = [
  {
    id: 'restaurant-menu-system',
    name: 'Restaurant Menu System',
    slug: 'restaurant-menu-system',
    description: 'Complete digital menu system with QR code ordering, real-time updates, and comprehensive analytics dashboard. Perfect for restaurants looking to modernize their ordering process.',
    short_description: 'Digital menu system with QR code ordering, real-time updates, and analytics dashboard.',
    category: 'restaurant',
    base_price: 15000,
    featured_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559339352-11d035aa65f7?w=800&h=600&fit=crop'
    ],
    features: [
      'QR Code Menu Generation',
      'Real-time Menu Updates',
      'Order Management System',
      'Analytics Dashboard',
      'Customer Feedback System',
      'Multi-language Support',
      'Mobile Responsive Design',
      '24/7 Customer Support'
    ],
    is_active: true,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'android-tv-app',
    name: 'Android TV App',
    slug: 'android-tv-app',
    description: 'Custom Android TV application with advanced streaming capabilities, smart remote support, and 4K resolution support. Ideal for content creators and streaming services.',
    short_description: 'Custom Android TV application with streaming capabilities and smart remote support.',
    category: 'tv',
    base_price: 25000,
    featured_image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop'
    ],
    features: [
      '4K Resolution Support',
      'Smart Remote Integration',
      'Streaming Capabilities',
      'Custom UI/UX Design',
      'Content Management',
      'Analytics Dashboard',
      'Multi-language Support',
      '24/7 Technical Support'
    ],
    is_active: true,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'streaming-mobile-app',
    name: 'Streaming Mobile App',
    slug: 'streaming-mobile-app',
    description: 'Professional streaming mobile application for iOS and Android with advanced features like live streaming, video on demand, and social media integration.',
    short_description: 'Professional streaming mobile app for iOS and Android with live streaming capabilities.',
    category: 'mobile',
    base_price: 35000,
    featured_image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=600&fit=crop'
    ],
    features: [
      'Live Streaming',
      'Video on Demand',
      'Social Media Integration',
      'User Authentication',
      'Content Management',
      'Analytics Dashboard',
      'Push Notifications',
      'Multi-platform Support'
    ],
    is_active: true,
    sort_order: 3,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'restaurant-website',
    name: 'Restaurant Website',
    slug: 'restaurant-website',
    description: 'Professional restaurant website with online ordering, table reservations, menu display, and customer reviews. Fully responsive and optimized for search engines.',
    short_description: 'Professional restaurant website with online ordering and table reservations.',
    category: 'web',
    base_price: 20000,
    featured_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559339352-11d035aa65f7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop'
    ],
    features: [
      'Online Ordering System',
      'Table Reservations',
      'Menu Display',
      'Customer Reviews',
      'SEO Optimization',
      'Mobile Responsive',
      'Content Management',
      '24/7 Support'
    ],
    is_active: true,
    sort_order: 4,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

// Product plans for each product
export const productPlans: ProductPlan[] = [
  // Restaurant Menu System Plans
  {
    id: 'restaurant-menu-basic',
    product_id: 'restaurant-menu-system',
    name: 'Basic Plan',
    description: 'Essential features for small restaurants',
    price: 15000,
    features: ['QR Code Menu', 'Basic Analytics', 'Email Support'],
    delivery_days: 1,
    is_popular: false,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'restaurant-menu-premium',
    product_id: 'restaurant-menu-system',
    name: 'Premium Plan',
    description: 'Advanced features for growing restaurants',
    price: 25000,
    features: ['QR Code Menu', 'Advanced Analytics', 'Order Management', 'Priority Support'],
    delivery_days: 1,
    is_popular: true,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'restaurant-menu-enterprise',
    product_id: 'restaurant-menu-system',
    name: 'Enterprise Plan',
    description: 'Complete solution for restaurant chains',
    price: 45000,
    features: ['All Premium Features', 'Multi-location Support', 'Custom Branding', 'Dedicated Support'],
    delivery_days: 1,
    is_popular: false,
    sort_order: 3,
    created_at: '2024-01-01T00:00:00Z'
  },

  // Android TV App Plans
  {
    id: 'android-tv-basic',
    product_id: 'android-tv-app',
    name: 'Basic Plan',
    description: 'Essential TV app features',
    price: 25000,
    features: ['Basic Streaming', 'HD Support', 'Email Support'],
    delivery_days: 1,
    is_popular: false,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'android-tv-premium',
    product_id: 'android-tv-app',
    name: 'Premium Plan',
    description: 'Advanced TV app features',
    price: 40000,
    features: ['4K Streaming', 'Smart Remote', 'Analytics', 'Priority Support'],
    delivery_days: 1,
    is_popular: true,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00Z'
  },

  // Streaming Mobile App Plans
  {
    id: 'streaming-mobile-basic',
    product_id: 'streaming-mobile-app',
    name: 'Basic Plan',
    description: 'Essential streaming features',
    price: 35000,
    features: ['Basic Streaming', 'User Auth', 'Email Support'],
    delivery_days: 1,
    is_popular: false,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'streaming-mobile-premium',
    product_id: 'streaming-mobile-app',
    name: 'Premium Plan',
    description: 'Advanced streaming features',
    price: 55000,
    features: ['Live Streaming', 'VOD', 'Analytics', 'Priority Support'],
    delivery_days: 1,
    is_popular: true,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00Z'
  },

  // Restaurant Website Plans
  {
    id: 'restaurant-website-basic',
    product_id: 'restaurant-website',
    name: 'Basic Plan',
    description: 'Essential website features',
    price: 20000,
    features: ['Basic Website', 'Menu Display', 'Email Support'],
    delivery_days: 1,
    is_popular: false,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'restaurant-website-premium',
    product_id: 'restaurant-website',
    name: 'Premium Plan',
    description: 'Advanced website features',
    price: 35000,
    features: ['Online Ordering', 'Reservations', 'Analytics', 'Priority Support'],
    delivery_days: 1,
    is_popular: true,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00Z'
  }
];

// Helper functions
export function getProducts(): Product[] {
  return products.filter(p => p.is_active).sort((a, b) => a.sort_order - b.sort_order);
}

export function getProductBySlug(slug: string): Product | null {
  return products.find(p => p.slug === slug && p.is_active) || null;
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category && p.is_active).sort((a, b) => a.sort_order - b.sort_order);
}

export function getProductPlans(productId: string): ProductPlan[] {
  return productPlans.filter(p => p.product_id === productId).sort((a, b) => a.sort_order - b.sort_order);
}

export function getProductPlan(planId: string): ProductPlan | null {
  return productPlans.find(p => p.id === planId) || null;
}
