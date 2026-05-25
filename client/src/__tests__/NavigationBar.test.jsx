import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('../public/bradley.jpg', () => ({ default: 'bradley.jpg' }));

import NavigationBar from '../components/NavigationBar';

describe('NavigationBar', () => {
  beforeEach(() => {
    document.getElementById = vi.fn().mockReturnValue(null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders brand name', () => {
    render(<NavigationBar />);
    expect(screen.getByText('Bradley Eugene Sakran')).toBeInTheDocument();
  });

  it('renders Home, About, Contact nav items', () => {
    render(<NavigationBar />);
    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
  });

  it('renders Connect button', () => {
    render(<NavigationBar />);
    expect(screen.getByRole('button', { name: /Connect/i })).toBeInTheDocument();
  });

  it('scrolls to section when nav button clicked', () => {
    const mockScrollIntoView = vi.fn();
    document.getElementById = vi.fn().mockReturnValue({ scrollIntoView: mockScrollIntoView });
    render(<NavigationBar />);
    fireEvent.click(screen.getByRole('button', { name: /About/i }));
    expect(document.getElementById).toHaveBeenCalledWith('about');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('updates active section on scroll', () => {
    const mockElement = { offsetTop: 500, offsetHeight: 600 };
    document.getElementById = vi.fn().mockReturnValue(mockElement);
    render(<NavigationBar />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 450, writable: true });
      fireEvent.scroll(window);
    });
    // active section detection runs without throwing
    expect(document.getElementById).toHaveBeenCalled();
  });

  it('removes scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<NavigationBar />);
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
