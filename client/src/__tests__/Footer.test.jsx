import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Bradley Eugene Sakran/i)).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map(l => l.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/bradeu');
    expect(hrefs).toContain('https://linkedin.com/in/besakran');
    expect(hrefs).toContain('https://instagram.com/bradley.eugene/');
    expect(hrefs).toContain('https://x.com/bradeudev');
  });
});
