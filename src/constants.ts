export const PROJECT_TITLE = 'xBeat';

type Fields = 'EMAIL' | 'USERNAME' | 'PASSWORD' | 'ARTIST' | 'ALBUM' | 'SONG' | 'PLAYLIST';

export const FIELD_LENGTH: { [k in Fields]: { MIN: number; MAX: number } } = {
  EMAIL: {
    MIN: 6,
    MAX: 255
  },
  USERNAME: {
    MIN: 2,
    MAX: 24
  },
  PASSWORD: {
    MIN: 8,
    MAX: 255
  },
  ARTIST: {
    MIN: 2,
    MAX: 255
  },
  ALBUM: {
    MIN: 1,
    MAX: 255
  },
  SONG: {
    MIN: 1,
    MAX: 255
  },
  PLAYLIST: {
    MIN: 1,
    MAX: 255
  }
};

export enum NodeEnvironment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}
