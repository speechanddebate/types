interface MemberSubscription {
    member_subscription_id?: number;
    person_id: number;
    tag: string;
    school_id?: number;
    invoice_id?: number;
    invoice_number?: string;
    start?: string;
    end?: string;
    created_at?: string;
    created_by_id?: number;
}

export default MemberSubscription;
