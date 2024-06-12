interface Result {
    person_id?: number;
    student_id?: number;
    student_first?: string;
    student_last?: string;
    entry_id?: number;
    school_id?: number;
    event_id?: number;
    round?: number;
    result?: number | string;
    day?: number;
    elim?: boolean;
}
export default Result;
