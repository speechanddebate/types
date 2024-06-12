interface InvoiceItem {
    product_id: number;
    name?: string;
    person_id?: number;
    use_quota: boolean;
}

export default InvoiceItem;
