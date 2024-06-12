import BallotOption from './BallotOption.js';
interface Ballot {
    id?: number;
    type: 'board' | 'hof' | 'cx' | 'ld' | 'pf' | 'referendum' | 'district' | 'crc';
    description: string;
    instructions?: string;
    realm?: string;
    start: string;
    end: string;
    created_at?: string;
    created_by_id?: number;
    votes?: number;
    voters_person?: number;
    voters_school?: number;
    voted?: boolean;
    school_id?: number;
    options?: BallotOption[];
}
export default Ballot;
