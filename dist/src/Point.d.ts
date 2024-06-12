interface Point {
    id: number;
    student_id?: number;
    coach_id?: number;
    school_id?: number;
    points: number;
    category_id?: number;
    description?: string;
    result?: string;
    tourn_id?: number;
    event_id?: number;
    status?: number;
    created_at?: string;
}
export default Point;
