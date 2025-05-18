import {envOrNumber, envOrString} from './env-utils';

export const proxy = {
  address: envOrString(process.env.PROXY_ADDRESS),
  port: envOrNumber(process.env.PROXY_PORT, 80),
  protocol: envOrString(process.env.PROXY_PROTOCOL, 'http'),
  username: envOrString(process.env.PROXY_USERNAME),
  password: envOrString(process.env.PROXY_PASSWORD),
};
