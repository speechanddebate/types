interface VirtuousContact {
    id: number;
}
interface VirtuousOrganization {
    id: number;
}
interface VirtuousOrganizationUser {
    id: number;
}
interface VirtuousWebhook {
    contact?: VirtuousContact;
    event?: string;
    eventId?: string;
    eventDateTimeUtc?: string;
    organization?: VirtuousOrganization;
    organizationUser?: VirtuousOrganizationUser;
}
export default VirtuousWebhook;
