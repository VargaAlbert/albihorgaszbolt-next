import axios from '@/services/api/axiosConfig';

type ProductData = {
  products: productT[];
};

export async function fetchProducAll(): Promise<ProductData> {
    await new Promise(res => setTimeout(res, 5000))  
    try {
        const response = await axios.get<productT[]>(`/products`, {
            withCredentials: true
        });
        
        if (!response.data) {
            throw new Error('The query was unsuccessful.');
        }

        const productData: ProductData = {
            products: response.data
        };

        return productData;
    } catch (error: any) {
        
        console.error('Error fetching data:', error.message);
        throw new Error('Error fetching data.');
    }
}

export async function fetchProducByCategory(category: string): Promise<ProductData> {
    await new Promise(res => setTimeout(res, 5000))    
    try {
        const response = await axios.get<productT[]>(`/products/${category}`, {
            withCredentials: true
        });

        if (!response.data) {
            throw new Error('The query was unsuccessful.');
        }

        const productData: ProductData = {
            products: response.data
        };

        return productData;
    } catch (error: any) {

        console.error('Error fetching data:', error.message);
        throw new Error('Error fetching data.');
    }
}