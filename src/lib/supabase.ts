import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
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

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  plan_id: string;
  quantity: number;
  custom_requirements: Record<string, any>;
  created_at: string;
  updated_at: string;
  product?: Product;
  plan?: ProductPlan;
}

export interface Order {
  id: string;
  user_id: string;
  order_number: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  total_amount: number;
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  company_name?: string;
  role: 'customer' | 'admin';
  created_at: string;
  updated_at: string;
}

// Auth helpers
export const signUp = async (email: string, password: string, userData: Partial<Profile>) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  if (data.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: data.user.id,
        email,
        ...userData,
      });

    if (profileError) throw profileError;
  }

  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Product helpers
export const getProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('sort_order');

    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }
    return data as Product[];
  } catch (error) {
    console.error('Error in getProducts:', error);
    return [];
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_plans (*)
      `)
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Error fetching product by slug:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getProductBySlug:', error);
    return null;
  }
};

// Cart helpers
export const getCartItems = async (userId: string) => {
  const { data, error } = await supabase
    .from('cart_items')
    .select(`
      *,
      product:products (*),
      plan:product_plans (*)
    `)
    .eq('user_id', userId);

  if (error) throw error;
  return data as CartItem[];
};

export const addToCart = async (userId: string, productId: string, planId: string, customRequirements = {}) => {
  const { data, error } = await supabase
    .from('cart_items')
    .upsert({
      user_id: userId,
      product_id: productId,
      plan_id: planId,
      custom_requirements: customRequirements,
      quantity: 1,
    })
    .select();

  if (error) throw error;
  return data;
};

export const removeFromCart = async (cartItemId: string) => {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', cartItemId);

  if (error) throw error;
};

export const clearCart = async (userId: string) => {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('user_id', userId);

  if (error) throw error;
};

// Order helpers
export const createOrder = async (userId: string, cartItems: CartItem[], totalAmount: number) => {
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: userId,
      total_amount: totalAmount,
      status: 'pending',
      payment_status: 'pending',
    })
    .select()
    .single();

  if (orderError) throw orderError;

  const orderItems = cartItems.map(item => ({
    order_id: order.id,
    product_id: item.product_id,
    plan_id: item.plan_id,
    quantity: item.quantity,
    unit_price: item.plan?.price || 0,
    total_price: (item.plan?.price || 0) * item.quantity,
    custom_requirements: item.custom_requirements,
  }));

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems);

  if (itemsError) throw itemsError;

  return order;
};

export const getUserOrders = async (userId: string) => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        product:products (*),
        plan:product_plans (*)
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};