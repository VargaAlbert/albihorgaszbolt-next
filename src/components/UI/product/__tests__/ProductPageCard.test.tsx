import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductPageCard from '../ProductPageCard';
import { formatPrice } from '@/utils/formatPrice';

const sampleProduct: productT = {
    productid: '1',
    product: 'Sample Product',
    description: 'Sample description',
    img: 'sample-image.jpg',
    price: 19990,
    category: 'botok',
};

test('renders ProductPageCard with correct product details', () => {
    render(<ProductPageCard {...sampleProduct} />);

    // Check that the correct items appear on the card
    const productName = screen.getByText(sampleProduct.product);
    const productPrice = screen.getByText(`${formatPrice(sampleProduct.price)} Ft`);
    const addToCartButton = screen.getByText('Kosárba');
    const favoriteIcon = screen.getByTestId('FavoriteIcon');

    // Check that the items appear on the card
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(addToCartButton).toBeInTheDocument();
    expect(favoriteIcon).toBeInTheDocument();
});
