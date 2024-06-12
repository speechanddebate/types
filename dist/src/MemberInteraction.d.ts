interface MemberInteraction {
    interaction_id: number;
    person_id: number;
    tag: string;
    value: string;
    start?: string;
    created_at: string;
    created_by_id: number;
}
export default MemberInteraction;
