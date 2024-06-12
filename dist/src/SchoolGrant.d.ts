interface Product {
    product_id: number;
    description: string;
}
interface SchoolGrant {
    id: number;
    grant_id: number;
    start: string;
    end: string;
    granted_by: number;
    granted_on: string;
    products: Product[];
}
export default SchoolGrant;
