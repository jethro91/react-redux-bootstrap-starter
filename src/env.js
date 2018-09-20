const env = {};
if (process.env.NODE_ENV === 'development') {
  env.NODE_ENV = 'development';
} else {
  env.NODE_ENV = process.env.NODE_ENV;
}

export const { NODE_ENV } = env;
export default env;
