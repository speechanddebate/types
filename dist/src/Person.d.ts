import Address from './Address.js';
interface Person {
    person_id: number;
    first: string;
    middle?: string;
    last: string;
    email?: string;
    alt_email?: string;
    phone?: string;
    alt_phone?: string;
    provider?: string;
    gender?: string;
    ethnicity?: Record<string, unknown>;
    paid?: boolean;
    trp?: boolean;
    points?: number;
    degree_id?: number;
    tz?: string;
    source?: string;
    created_at?: string;
    addresses?: Address[];
}
export default Person;
