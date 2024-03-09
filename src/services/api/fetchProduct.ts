import axios from '@/services/api/axiosConfig';

type ProductsData = {
  products: productT[];
};

type ProductData = {
    product: productT;
};

export async function fetchProducAll(): Promise<ProductsData> {
    try {
        const response = await axios.get<productT[]>(`/products`, {
            withCredentials: true
        });
        
        if (!response.data) {
            throw new Error('The query was unsuccessful.');
        }

        const productData: ProductsData = {
            products: response.data
        };

        return productData;
    } catch (error: any) {
        
        console.error('Error fetching data:', error.message);
        throw new Error('Error fetching data.');
    }
}

export async function fetchProducByCategory(category: string): Promise<ProductsData> { 
    try {
        const response = await axios.get<productT[]>(`/products/${category}`, {
            withCredentials: true
        });

        if (!response.data) {
            throw new Error('The query was unsuccessful.');
        }

        const productData: ProductsData = {
            products: response.data
        };

        return productData;
    } catch (error: any) {

        console.error('Error fetching data:', error.message);
        throw new Error('Error fetching data.');
    }
} 
 export async function fetchProductById(productId: string): Promise<ProductData> {   
    try {
        console.log(productId)
        const response = await axios.get<productT>(`/products/product/${productId}`, {
            withCredentials: true
        });

        if (!response.data) {
            throw new Error('The query was unsuccessful.');
        }

        const productData: ProductData = {
            product: response.data
        };

        return productData;
    } catch (error: any) {

        console.error('Error fetching data:', error.message);
        throw new Error('Error fetching data.');
    }
}  