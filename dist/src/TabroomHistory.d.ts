interface TabroomStudent {
    id: number;
}
interface TabroomJudge {
    id: number;
}
interface TabroomHistory {
    personId: number;
    student: TabroomStudent[];
    judge: TabroomJudge[];
}
export default TabroomHistory;
