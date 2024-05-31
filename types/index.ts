export interface JobPost {
    post_id: string;
    job_name: string;
    company_name: string;
    job_full_text: string;
    post_url: string;
    post_apply_url: string;
    company_url: string;
    company_industry: string;
    minimum_compensation: number;
    maximum_compensation: number;
    compensation_type: string;
    job_hours: string;
    role_seniority: string;
    minimum_education: string;
    office_location: string;
    post_html: string;
    city: string;
    region: string;
    country: string;
    job_published_at: Date;
    last_indexed: Date;
}
