import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageProvider, usePageContext } from '../PageContext';

function Consumer() {
  const { page, handleSetActivePage } = usePageContext();
  return (
    <div>
      <span data-testid="page">{page}</span>
      <button onClick={() => handleSetActivePage('contact')}>go contact</button>
    </div>
  );
}

describe('PageContext', () => {
  it('defaults to "about" on root path', () => {
    render(<PageProvider><Consumer /></PageProvider>);
    expect(screen.getByTestId('page').textContent).toBe('about');
  });

  it('handleSetActivePage updates page value', () => {
    render(<PageProvider><Consumer /></PageProvider>);
    act(() => screen.getByRole('button').click());
    expect(screen.getByTestId('page').textContent).toBe('contact');
  });
});
