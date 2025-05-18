import {envOrNumber} from './env-utils';

export const nvidia = {
  addToCardAttempts: envOrNumber(process.env.NVIDIA_ADD_TO_CART_ATTEMPTS, 10),
  sessionTtl: envOrNumber(process.env.NVIDIA_SESSION_TTL, 60000),
};
