interface UsernameUpdate {
    password: string;
    current_username: string;
    new_username: string;
    school_id?: number;
}

export default UsernameUpdate;
