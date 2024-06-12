import Tournament from './Tournament.js';

interface PointEntry {
    tourn: Tournament;
    school_id?: number;
    entries: {
        student_id: number;
        coach_id: number;
        category_id?: number;
        wins?: number;
        losses?: number;
        nodecisions?: number;
        ranks?: number[];
        service_type?: number;
        points?: number;
    }[];
}

export default PointEntry;
