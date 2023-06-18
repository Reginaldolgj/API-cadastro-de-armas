export function converteTexto(str: string) {
	const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f\s]/g, ''); // Remove acentos e espaços
	return normalizedStr.toLowerCase();
}