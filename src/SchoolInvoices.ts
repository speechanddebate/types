interface SchoolInvoices {
    balance: number;
    invoices: {
        invoice_id: number;
        school_id: number;
        amount: number;
        description: string;
        created_at: string;
        created_by_id: number;
    }[];
}

export default SchoolInvoices;
