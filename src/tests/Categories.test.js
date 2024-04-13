import React from 'react';
import { render, screen } from '@testing-library/react';
import Categories from '../components/Categories';
import { categories } from '../components/data/categories';
import { MemoryRouter } from 'react-router-dom';

describe('Categories Component', () => {
  test('renders without crashing', () => {
    render(<MemoryRouter><Categories/></MemoryRouter>);
  });

  test('displays the category names and images correctly', () => {
    render(<MemoryRouter><Categories/></MemoryRouter>);

    categories.forEach(category => {
      const categoryName = screen.getByText(category.name);
      expect(categoryName).toBeInTheDocument();

      const categoryImage = screen.getByAltText(category.name);
      expect(categoryImage).toBeInTheDocument();
      expect(categoryImage).toHaveAttribute('src', category.image);
    });
  });

 
});
