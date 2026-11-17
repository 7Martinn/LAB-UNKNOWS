// Módulo Científico: Ecuaciones de Fricción Dinámica en Plano Inclinado
// Responsables: Martín Molina & Martín Aguayo
export const GRAVITY = 9.81;
export function calculateAcceleration(angleDeg, muk) {
  const rad = (angleDeg * Math.PI) / 180;
  return Math.tan(rad) > muk ? GRAVITY * (Math.sin(rad) - muk * Math.cos(rad)) : 0;
}
