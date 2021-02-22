export const isUndefined = (object: unknown): object is undefined => typeof object === 'undefined';

export const isNull = (object: unknown): object is null => object === null;

export const isNil = (object: unknown): object is null | undefined => isUndefined(object) || isNull(object);

export const isEmptyObject = (object: unknown): boolean =>
  !isNil(object) && Object.keys(object as Record<string, unknown>).length === 0;

export const isObjectIncludesObject = <T extends Record<string, unknown>, K extends keyof T>(target: T): boolean =>
  !isNil(target) && Object.keys(target).some(key => typeof target[key as K] === 'object' && !isNull(target[key as K]));
