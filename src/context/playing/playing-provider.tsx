"use client";

import React from "react";
import { PlayingContenxt } from "./playing-create";
import { ISongProps } from "@/src/types";

interface PlayingProviderProps {
  children: React.ReactNode;
}

export const PlayingProvider = ({ children }: PlayingProviderProps) => {
  const [songs, setSongs] = React.useState<ISongProps[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = React.useState<number>(0);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number>(0);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if (songs.length > 0) {
      audioRef.current?.load();
    }
  }, [songs]);

  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex: number) => (prevIndex + 1) % songs.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex(
      (prevIndex: number) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  const handleTimeUpdate = () => {
    const currentProgress =
      (audioRef.current?.currentTime || 0) / (audioRef.current?.duration || 1);
    setProgress(currentProgress);
  };

  const handleSeek = (newProgress: number) => {
    if (audioRef.current) {
      const newTime = newProgress * (audioRef.current.duration || 0);
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSongEnd = () => {
    playNextSong();
  };

  const contextValue = {
    songs,
    currentSongIndex,
    isPlaying,
    progress,
    playPauseToggle,
    playNextSong,
    playPreviousSong,
    handleTimeUpdate,
    handleSeek,
    handleVolumeChange,
    audioRef,
  };

  return (
    <PlayingContenxt.Provider value={contextValue}>
      {children}
    </PlayingContenxt.Provider>
  );
};
