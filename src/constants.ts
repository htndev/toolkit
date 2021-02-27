export const PROJECT_TITLE = 'xBeat';

export const FIELD_LENGTH = {
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
  }
};

export enum NodeEnvironment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}
