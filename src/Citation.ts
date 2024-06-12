interface Citation {
    id?: number;
    person_id?: number;
    category_id: number;
    description?: string;
    date?: string;
    points?: number;
    status?: 'pending' | 'approved' | 'denied';
    created_at?: string;
    entered_by_id?: number;
}

export default Citation;
