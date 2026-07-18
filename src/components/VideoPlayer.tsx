import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Props = {
  src: string;
};

export default function VideoPlayer({ src }: Props) {
  // Extract YouTube video ID from various URL formats
  const getYouTubeId = (url: string): string | null => {
    if (!url) return null;
    
    // Handle youtube.com/watch?v=ID
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?\s]+)/);
    if (match && match[1]) return match[1];
    
    // If it's already just an ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    
    return null;
  };

  const youtubeId = getYouTubeId(src);
  
  if (youtubeId) {
    // YouTube embed
    return (
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          borderRadius: '12px',
          marginBottom: '20px',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '12px',
          }}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Local video fallback
  const videoSrc = useBaseUrl(src);
  
  return (
    <video
      width="100%"
      controls
      style={{
        borderRadius: '12px',
        display: 'block',
      }}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}