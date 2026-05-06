/**
 * Formatting utilities for prices (CHF), distances (km), and dates (fr-CH).
 */

export function formatPriceCHF(value: number): string {
  return new Intl.NumberFormat('fr-CH', {
    style: 'currency',
    currency: 'CHF',
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace('CHF', 'CHF ');
}

export function formatKm(km: number): string {
  return `${new Intl.NumberFormat('fr-CH').format(km).replaceAll(' ', "'")} km`;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export function formatDateShort(iso: string): string {
  return new Intl.DateTimeFormat('fr-CH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(iso));
}

export function formatPower(hp: number): string {
  return `${hp} ch`;
}
