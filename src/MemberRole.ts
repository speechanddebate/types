interface MemberRole {
    person_id: number;
    role: string;
    school_id: number;
    school_name?: string;
    realm?: string;
    grad_year?: number;
    start?: string;
    end?: string;
    status: number;
}

export default MemberRole;
