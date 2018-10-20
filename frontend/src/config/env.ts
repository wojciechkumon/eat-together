export const isProdEnv: boolean = process.env.NODE_ENV === 'production';
export const isDevEnv: boolean = !isProdEnv;
export const contextPath: string = process.env.CONTEXT_PATH!;

