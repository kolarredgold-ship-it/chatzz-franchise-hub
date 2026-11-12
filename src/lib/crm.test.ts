import { describe, expect, it } from 'vitest';
import { blankLead, dueFollowUp, locationReports, whatsappLink } from './crm';
describe('CRM follow-up rules', () => {
  it('includes overdue and today follow-ups but excludes closed leads', () => {
    const lead = { ...blankLead(), nextFollowUp: '2026-11-12' };
    expect(dueFollowUp(lead, '2026-11-12')).toBe(true);
    expect(dueFollowUp(lead, '2026-11-11')).toBe(false);
    expect(dueFollowUp({ ...lead, status: 'Converted' }, '2026-11-12')).toBe(false);
    expect(dueFollowUp({ ...lead, status: 'Lost' }, '2026-11-12')).toBe(false);
  });
  it('groups location reports case-insensitively with follow-up and training counts', () => {
    const leads = [{ ...blankLead(), city: 'Kolar', nextFollowUp: '2026-11-10', trainingStatus: 'Scheduled' }, { ...blankLead(), city: ' kolar ', status: 'Converted' }];
    expect(locationReports(leads, '2026-11-12')).toEqual([{ city: 'Kolar', total: 2, due: 1, converted: 1, training: 1 }]);
  });
  it('opens prepared WhatsApp chats without sending automatically', () => {
    const url = new URL(whatsappLink('9738959525', 'Hi & welcome'));
    expect(url.hostname).toBe('wa.me'); expect(url.pathname).toBe('/919738959525'); expect(url.searchParams.get('text')).toBe('Hi & welcome');
  });
});