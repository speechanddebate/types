interface Column {
    label: string;
}

interface ReportOptions {
    name: string;
}

interface Report {
    title: string;
    description: string;
    columns: Column[];
    options: ReportOptions;
    data: Record<string, unknown>[];
}

export default Report;
