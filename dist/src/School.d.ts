import Address from './Address.js';
interface School {
    school_id: number;
    name: string;
    official_name?: string;
    realm: string;
    international?: boolean;
    homeschool?: boolean;
    autobill?: boolean;
    addresses: Address[];
}
export default School;
