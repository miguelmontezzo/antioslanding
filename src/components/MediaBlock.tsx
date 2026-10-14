import React, { useState } from 'react';
import {
  isYouTubeUrl,
  getYouTubeEmbedId,
  getYouTubeEmbedUrl,
  isDirectVideoUrl,
} from '../lib/mediaUtils';

type MediaBlockProps = {
  /** URL da imagem (poster ou exibição quando não há vídeo). */
  imageUrl: string;
  /** URL do vídeo (mp4, webm) ou link do YouTube. Se vazio, mostra só a imagem. */
  videoUrl: string;
  className?: string;
  /** Mostrar overlay de play e barra de progresso (estilo player). */
  showPlayerUI?: boolean;
};

/**
 * Bloco de mídia: exibe imagem, vídeo direto ou embed do YouTube.
 * Aceita links de imagem e de vídeo (incl. YouTube); reproduz vídeo sem som.
 */
export function MediaBlock({
  imageUrl,
  videoUrl,
  className = '',
  showPlayerUI = true,
}: MediaBlockProps) {
  const [videoErrored, setVideoErrored] = useState(false);

  const trimmedVideo = videoUrl?.trim() || '';
  const trimmedImage = imageUrl?.trim() || '';
  const isYouTube = isYouTubeUrl(trimmedVideo);
  const ytId = getYouTubeEmbedId(trimmedVideo);
  const isDirect = isDirectVideoUrl(trimmedVideo);
  const showYouTube = isYouTube && ytId && !videoErrored;
  const showDirectVideo = isDirect && trimmedVideo && !videoErrored;
  const showImage = !showYouTube && !showDirectVideo;

  const content = (
    <>
      {showYouTube && (
        <iframe
          src={getYouTubeEmbedUrl(ytId!)}
          title="Vídeo"
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          onError={() => setVideoErrored(true)}
        />
      )}
      {showDirectVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoErrored(true)}
        >
          <source src={trimmedVideo} type="video/mp4" />
        </video>
      )}
      {showImage && trimmedImage && (
        <img
          src={trimmedImage}
          alt=""
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      )}
      {showPlayerUI && (showImage || showDirectVideo || showYouTube) && (
        <>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-accent flex items-center justify-center shadow-2xl opacity-90">
              <div className="w-0 h-0 border-t-[10px] sm:border-t-[12px] border-t-transparent border-l-[16px] sm:border-l-[20px] border-l-white border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1.5 sm:ml-2" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 pointer-events-none">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-accent" />
              </div>
              <span className="text-white/40 text-[10px] font-bold tracking-widest">
                01:24 / 03:45
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <div
      className={`aspect-video bg-dark rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,102,255,0.2)] relative group cursor-pointer ${className}`}
    >
      {content}
    </div>
  );
}
