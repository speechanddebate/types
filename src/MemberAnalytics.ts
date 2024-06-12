interface MemberAnalytics {
    total_views?: number;
    page_view_details?: PageView[];
}

interface PageView {
    url: string;
    count: number;
}

export default MemberAnalytics;
