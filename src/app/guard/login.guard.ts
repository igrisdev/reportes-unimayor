import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

function decodeJWT(token: string): any | null {
  if (!token) return null;

  try {
    const payload = token.split('.')[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const decoded = decodeJWT(token!);

  if (!token || !decoded) {
    router.navigate(['/login']);
    return false;
  }

  const isBrigadier = decoded.EsBrigadista === 'true';

  if (state.url.startsWith('/brigadier') && !isBrigadier) {
    router.navigate(['/user']);
    return false;
  }

  if (state.url.startsWith('/user') && isBrigadier) {
    router.navigate(['/brigadier']);
    return false;
  }

  return true;
};
