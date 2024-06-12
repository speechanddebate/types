interface BallotOption {
    ballot_option_id?: number;
    ballot_id?: number;
    description: string;
    sequence?: number;
    person_id?: number;
    school_id?: number;
    district_id?: number;
    region_id?: number;
    created_at?: string;
}

export default BallotOption;
