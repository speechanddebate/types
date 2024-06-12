interface MemberLearnDetails {
    status: string;
    start: string;
}

// Define MemberLearn as a typescript type that is an array of MemberLearnDetails
type MemberLearn = MemberLearnDetails[];

export default MemberLearn;
