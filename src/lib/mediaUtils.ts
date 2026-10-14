/** Detecta se a URL é do YouTube (watch ou embed ou youtu.be). */
export function isYouTubeUrl(url: string): boolean {
  if (!url?.trim()) return false;
  const u = url.trim().toLowerCase();
  return (
    u.includes('youtube.com/watch') ||
    u.includes('youtube.com/embed') ||
    u.includes('youtu.be/')
  );
}

/** Extrai o ID do vídeo do YouTube para usar em embed. */
export function getYouTubeEmbedId(url: string): string | null {
  if (!url?.trim()) return null;
  const u = url.trim();
  const match =
    u.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/) ||
    u.match(/^([a-zA-Z0-9_-]{11})$/);
  return match ? match[1] : null;
}

/** URL de embed do YouTube com autoplay e mute (sem som). */
export function getYouTubeEmbedUrl(videoId: string, loop = true): string {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    playsinline: '1',
    rel: '0',
  });
  if (loop) params.set('loop', '1');
  if (loop) params.set('playlist', videoId); // necessário para loop funcionar
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

/** Verifica se parece ser link direto de vídeo (mp4, webm, etc). */
export function isDirectVideoUrl(url: string): boolean {
  if (!url?.trim()) return false;
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url.trim()) || url.trim().toLowerCase().startsWith('blob:');
}
