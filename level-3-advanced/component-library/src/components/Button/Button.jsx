import React from 'react';
import './Button.css';

/**
 * Bouton réutilisable avec différentes variantes et tailles.
 * @param {Object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Le contenu du bouton.
 * @param {'primary' | 'secondary' | 'danger'} [props.variant='primary'] - La variante de style.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - La taille du bouton.
 * @param {boolean} [props.disabled=false] - Désactive le bouton.
 * @param {function} [props.onClick] - Fonction appelée au clic.
 * @param {string} [props.ariaLabel] - Label ARIA pour l'accessibilité.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};