import { leadSchema, records, requestSchema } from './schema.ts';
function assert(condition: boolean) { if (!condition) throw new Error('Assertion failed'); }
const lead = { name: 'Test Lead', phone: '9738959525', city: 'Kolar', model: 'Kiosk' };
Deno.test('CRM validates training date order', () => {
  assert(!leadSchema.safeParse({ ...lead, trainingStart: '2026-11-15', trainingEnd: '2026-11-12' }).success);
  assert(leadSchema.safeParse({ ...lead, trainingStart: '2026-11-12', trainingEnd: '2026-11-15' }).success);
});
Deno.test('CRM records tolerate blank trailing sheet cells', () => {
  const rows = records(['id','name','city'], [['id','name','city'],['123','Trainer']]);
  assert(rows[0].city === ''); assert(rows[0].name === 'Trainer');
});
Deno.test('WhatsApp activity records chat opening, never delivery', () => {
  const id = '1b64b828-faa0-4f80-b153-7f3821f5bbde';
  assert(requestSchema.safeParse({action:'activity',leadId:id,type:'WhatsApp opened',note:'Enquiry'}).success);
  assert(!requestSchema.safeParse({action:'activity',leadId:id,type:'Delivered',note:'Enquiry'}).success);
});