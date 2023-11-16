"use client";
import React from "react";
import { ISongProps } from "@/src/types";

interface IPlayingContextProps {
  songs: ISongProps[] | null;
  currentSongIndex: number;
  isPlaying: boolean;
  progress: number;
  playPauseToggle: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  handleTimeUpdate: () => void;
  handleSeek: (newProgress: number) => void;
  handleVolumeChange: (newVolume: number) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const PlayingContenxt = React.createContext<IPlayingContextProps | undefined>(
  undefined
);
