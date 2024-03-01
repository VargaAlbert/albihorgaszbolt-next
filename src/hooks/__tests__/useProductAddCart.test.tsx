import { render, screen, fireEvent } from '@testing-library/react';
import useProductAddCart from '../useProductsAddCart';

const TEST_QUANTITY = 3;
const START_TEST_TEST_QUANTITY = 7;
describe('useProductAddCart', () => {
    beforeEach(() => {
        // Reset local storage before each test
        localStorage.clear();
    });

    it('should add products to the cart', () => {
        // Render the component that uses the hook
        const TestComponent = () => {
            const { cartItems, productAddCart, findQuantityById } = useProductAddCart();

            return (
                <div>
                    <div>{cartItems.length} items in the cart</div>
                    <button onClick={() => productAddCart(1, 'product-1', true)}>Add Product 1</button>
                    <button onClick={() => productAddCart(2, 'product-2', true)}>Add Product 2</button>
                </div>
            );
        };

        render(<TestComponent />);

        // Check if initially, there are no items in the cart
        expect(screen.getByText('0 items in the cart')).toBeInTheDocument();

        // Trigger the button click to add Product 1
        fireEvent.click(screen.getByText('Add Product 1'));

        // Check if Product 1 is added to the cart
        expect(screen.getByText('1 items in the cart')).toBeInTheDocument();

        // Trigger the button click to add Product 2
        fireEvent.click(screen.getByText('Add Product 2'));

        // Check if Product 2 is added to the cart
        expect(screen.getByText('2 items in the cart')).toBeInTheDocument();
    });

    it.each(Array.from({ length: 10 }, (_, index) => [index + 1]))(
        'should update quantities in the cart productAddCart(quantity, "product", true!)',
        (quantity) => {
            // Render the component that uses the hook
            const TestComponent = () => {
                const { productAddCart, findQuantityById } = useProductAddCart();

                return (
                    <div>
                        <div>
                            product-1 {findQuantityById('product-1')} quantity in the cart
                        </div>
                        <button onClick={() => productAddCart(TEST_QUANTITY, 'product-1', true)}>
                            Add Product 1
                        </button>
                    </div>
                );
            };

            render(<TestComponent />);

            for (let i = 0; i < quantity; i++) {
                fireEvent.click(screen.getByText('Add Product 1'));
            }

            expect(screen.getByText(`product-1 ${quantity * TEST_QUANTITY} quantity in the cart`)).toBeInTheDocument();
        }
    );



    test.each(Array.from({ length: 10 }, (_, index) => index + START_TEST_TEST_QUANTITY))(
        'should update quantities in the cart productAddCart(quantity, "product", false!)',
        (iterationIndex) => {
            const TestComponent = () => {
                const { productAddCart, findQuantityById } = useProductAddCart();

                return (
                    <div>
                        <div>product-1 {findQuantityById('product-1')} quantity in the cart</div>
                        <button onClick={() => productAddCart(iterationIndex, 'product-1', false)}>Add Product 1</button>
                    </div>
                );
            };

            render(<TestComponent />);

            fireEvent.click(screen.getByText('Add Product 1'));

            expect(screen.getByText(`product-1 ${iterationIndex} quantity in the cart`)).toBeInTheDocument();
        }
    );

    it('should remove products from the cart', () => {
        // Render the component that uses the hook
        const TestComponent = () => {
            const { cartItems, productAddCart, removeFromCart } = useProductAddCart();

            return (
                <div>
                    <div>{cartItems.length} items in the cart</div>
                    <button onClick={() => productAddCart(1, 'product-1', true)}>Add Product 1</button>
                    <button onClick={() => removeFromCart('product-1')}>Remove Product 1</button>
                </div>
            );
        };

        render(<TestComponent />);

        // Trigger the button click to add Product 1
        fireEvent.click(screen.getByText('Add Product 1'));

        // Check if Product 1 is added to the cart
        expect(screen.getByText('1 items in the cart')).toBeInTheDocument();

        // Trigger the button click to remove Product 1
        fireEvent.click(screen.getByText('Remove Product 1'));

        // Check if Product 1 is removed from the cart
        expect(screen.getByText('0 items in the cart')).toBeInTheDocument();
    });

});