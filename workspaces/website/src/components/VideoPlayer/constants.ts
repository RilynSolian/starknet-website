export type Chapter = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  videoId: string;
  durationTime: string;
};
export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    title: "How Starknet scales Ethereum",
    description: "Episode 1 explains how Starknet works at a high level",
    thumbnail: "/assets/video/video-thumbnail-placeholder.jpg",
    videoId: "abd99c9696f1862f828c6e18136d75e5",
    durationTime: "02:02",
  },
  {
    id: "sequencer",
    title: "The Starknet Sequencer",
    description: "Episode 2 explains about the Starknet Sequencer",
    thumbnail: "/assets/video/video-thumbnail-placeholder.jpg",
    videoId: "7ca4a89a8031a1737e4632ec498afb55",
    durationTime: "02:02",
  },
  {
    id: "prover",
    title: "The Starknet Prover",
    description: "Episode 3 explains how the Starknet Prover works",
    thumbnail: "/assets/video/video-thumbnail-placeholder.jpg",
    videoId: "b66a934468bf72606e60abd7d475acf3",
    durationTime: "02:02",
  },
  {
    id: "eth-settlement",
    title: "Secure settlement on Ethereum",
    description: "Episode 5 explains about how to secure settlement on Ethereum",
    thumbnail: "/assets/video/video-thumbnail-placeholder.jpg",
    videoId: "af654c93367a0d4eae7ea90252ac342e",
    durationTime: "02:03",
  },
];

export const playlistObject: Record<string, Chapter> = playlist.reduce(
  (acc, chapter) => ({ [chapter.id]: chapter, ...acc }),
  {}
);
export const CHAPTER_CHANGE_TIMEOUT = 5;

export const VIDEOJS_INACTIVITY_TIMEOUT = 3000;

export const VIDEO_SHARE_DOMAIN = "https://www.starknet.io";
