import React, { useState } from 'react';
import {
  getYouTubeEmbedId,
  getYouTubeEmbedUrl,
  isYouTubeUrl,
} from '../lib/mediaUtils';

type VideoBackgroundProps = {
  src: string;
  opacity?: number;
};

/** Vídeo de fundo: aceita URL direta (mp4) ou YouTube. Autoplay sem som. Fallback em gradiente se falhar. */
export function VideoBackground({ src, opacity = 0.2 }: VideoBackgroundProps) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const trimmed = src?.trim() || '';
  const isYouTube = isYouTubeUrl(trimmed);
  const ytId = getYouTubeEmbedId(trimmed);
  const showYouTube = isYouTube && ytId && !errored;
  const showDirect = !isYouTube && trimmed && !errored;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {showYouTube && (
        <iframe
          src={getYouTubeEmbedUrl(ytId!)}
          title="Vídeo de fundo"
          className="absolute inset-0 w-full h-full min-w-full min-h-full border-0"
          style={{ opacity: loaded ? opacity : 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      )}
      {showDirect && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: loaded ? opacity : 0 }}
          onLoadedData={() => setLoaded(true)}
          onError={() => setErrored(true)}
        >
          <source src={trimmed} type="video/mp4" />
        </video>
      )}
      {/* Fallback quando não há mídia ou falha */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"
        style={showYouTube && loaded ? { display: 'none' } : undefined}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      <div className="absolute inset-0 grid-bg opacity-20" />
    </div>
  );
}
