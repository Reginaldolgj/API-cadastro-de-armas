export function converteTexto(str: string) {
  const trimmedStr = str.trim(); // Remove espaços no início e no fim
  const normalizedStr = trimmedStr.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos
  return normalizedStr.toUpperCase(); // Maiusculo
}
