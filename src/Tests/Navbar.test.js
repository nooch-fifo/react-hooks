import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import {
    BrowserRouter as Router
} from 'react-router-dom';

test('renders Navbar that is Loading', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText(/Loading.../);
  expect(linkElement).toBeInTheDocument();
});

test('renders Home Navbar link that has a correct href value', () => {
    render(<Router><Navbar /></Router>);
    const linkElement = screen.getByText(/Home/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });

  test('renders Blog Posts Navbar link that has a correct href value', () => {
    render(<Router><Navbar /></Router>);
    const linkElement = screen.getByText(/Blog Posts/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/posts");
  });