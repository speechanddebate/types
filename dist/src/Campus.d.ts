export interface CampusRoom {
    roomName: string;
    json: string;
}
export interface Campus {
    school_id: number;
    school_name: string;
    rooms: CampusRoom[];
}
export default Campus;
