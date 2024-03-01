import React from 'react';
import useProductsFilter from '../useProductsFilter';
import { render, act } from '@testing-library/react';

const products: productT[] = [
  { productid: '1', product: 'name1', description: 'Product 1', img: '', price: 1000, category: 'CategoryA' },
  { productid: '2', product: 'name2', description: 'Product 2', img: '', price: 2000, category: 'CategoryB' },
  { productid: '3', product: 'name3', description: 'Product 3', img: '', price: 3000, category: 'CategoryC' },
];
describe('useProductsFilter', () => {
  test('products no filter', () => {
    const filter = {};
    let result;
    act(() => {
      render(
        <TestComponent
          hook={() => {
            result = useProductsFilter(products, filter);
          }}
        />
      );
    });
    expect(result).toEqual(products);
  });

  test('filters products by category', () => {
    const filter = { category: 'CategoryA' };
    let result;
    act(() => {
      render(
        <TestComponent
          hook={() => {
            result = useProductsFilter(products, filter);
          }}
        />
      );
    });
    expect(result).toEqual([
      { productid: '1', product: 'name1', description: 'Product 1', img: '', price: 1000, category: 'CategoryA' }
    ]);
  });


});

const TestComponent: React.FC<{ hook: () => void }> = ({ hook }) => {
  hook();
  return null;
};