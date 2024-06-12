interface MemberHonor {
    member_honor_id: number;
    person_id: number;
    honor_id: number;
    school_id?: number;
    start?: string;
    end?: string;
    status?: boolean;
    note?: string;
    created_at: string;
    created_by_id: number;
}
export default MemberHonor;
