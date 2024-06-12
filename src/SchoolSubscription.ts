interface SchoolSubscription {
    school_subscription_id?: number;
    school_id: number;
    tag: string;
    invoice_id?: number;
    invoice_number?: string;
    start?: string;
    end?: string;
    created_at?: string;
    created_by_id?: number;
}

export default SchoolSubscription;
