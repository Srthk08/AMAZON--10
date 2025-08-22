import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ cookies }) => {
  try {
    // Get authentication tokens from cookies
    const accessToken = cookies.get('sb-access-token');
    const refreshToken = cookies.get('sb-refresh-token');

    if (!accessToken || !refreshToken) {
      return new Response(JSON.stringify({ count: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Set session
    const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value,
    });

    if (sessionError || !sessionData.user) {
      return new Response(JSON.stringify({ count: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get cart count
    const { count, error } = await supabase
      .from('cart_items')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', sessionData.user.id);

    if (error) {
      console.error('Error getting cart count:', error);
      return new Response(JSON.stringify({ count: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ count: count || 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Cart count error:', error);
    return new Response(JSON.stringify({ count: 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};