interface SchoolMember {
    id?: number;
    person_id?: number;
    role?: string;
    first?: string;
    middle?: string;
    last?: string;
    school_id?: number;
    grad_year?: number;
    start?: string;
    end?: string;
    paid: boolean;
    invoice_numbers?: string;
    points?: number;
}

export default SchoolMember;
