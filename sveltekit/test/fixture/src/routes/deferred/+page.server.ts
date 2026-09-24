export const load = () => ({
  later: new Promise<string>((resolve) => setTimeout(() => resolve('complete'), 350)),
});
