import InvoiceItem from './InvoiceItem.js';
interface Invoice {
    school_id: number;
    items: InvoiceItem[];
    nationals?: boolean;
}
export default Invoice;
