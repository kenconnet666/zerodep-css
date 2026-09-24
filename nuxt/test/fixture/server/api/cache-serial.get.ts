let serial = 0;

export default defineEventHandler(() => ({ serial: ++serial }));
