interface SchoolHonor {
    school_honor_id: number;
    school_id: number;
    honor_id: number;
    description: string;
    tag: string;
    type: string;
    district_id: number;
    place: number;
    points: number;
    start?: string;
    end?: string;
    status: boolean;
    recognized: boolean;
    created_at: string;
    created_by_id: number;
}

export default SchoolHonor;
