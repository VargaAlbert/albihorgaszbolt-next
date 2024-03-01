import { formatPrice } from '../formatPrice';

describe('formatPrice', () => {
  it('should format a number into a string with thousands separator', () => {
    // Arrange
    const price = 1234567;

    // Act
    const formattedPrice = formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('1.234.567');
  });

  it('should handle a number with no thousands separator', () => {
    // Arrange
    const price = 123;

    // Act
    const formattedPrice = formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('123');
  });

  it('should handle a number with decimals', () => {
    // Arrange
    const price = 1234567.89;

    // Act
    const formattedPrice = formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('1.234.567.89');
  });
});
