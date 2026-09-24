export default defineEventHandler((event) => {
  const blue = new URL(event.path, 'http://localhost').searchParams.get('tone') === 'blue';
  return { tone: blue ? 'blue' : 'red', color: blue ? '#2563eb' : '#dc2626' };
});
