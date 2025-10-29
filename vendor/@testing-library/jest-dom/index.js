import { expect } from 'vitest';

expect.extend({
  toBeInTheDocument(received) {
    const pass = Boolean(received && received.__found);
    return {
      pass,
      message: () =>
        pass
          ? 'Expected element not to be in the document'
          : 'Expected element to be in the document',
    };
  },
});
