interface EmmaGroup {
    member_group_id?: number;
    groupName: string;
    groupId: number;
    members?: EmmaMember[];
}

interface EmmaMember {
    email: string;
    name?: string;
}

export default EmmaGroup;
