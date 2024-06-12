interface LogError {
    err: Record<string, unknown>;
    store: Record<string, unknown>;
    personId: number;
    userAgent: string;
}

export default LogError;
