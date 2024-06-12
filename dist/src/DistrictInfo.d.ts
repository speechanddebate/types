interface DistrictInfo {
    id: number;
    name: string;
    level?: number;
    realm: string;
    degrees_current: number;
    degrees_last: number;
    member_schools: number;
    charter_schools: number;
    provisional_schools: number;
    active_schools: number;
    entries_3_year: number;
    entries_2_year: number;
    entries_1_year: number;
    strength_2_year: number;
    strength_1_year: number;
    strength_current: number;
    growth_3_year: number;
    growth_2_year: number;
    growth_1_year: number;
    new_members: number;
}
export default DistrictInfo;
