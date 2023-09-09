import { getProducts } from 'fakeApi';
import { ProductList } from '../components/ProductList';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
