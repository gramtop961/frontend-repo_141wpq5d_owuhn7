import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function KYCVerification() {
  const [form, setForm] = useState({ full_name: '', license_number: '', issuing_state: '', document_url: '' });
  const [submitting, setSubmitting] = useState(false);
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  async function fetchStatuses() {
    try {
      const res = await fetch(`${API_BASE}/kyc`);
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch {}
  }

  useEffect(() => {
    fetchStatuses();
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    try {
      const res = await fetch(`${API_BASE}/kyc/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.full_name,
          license_number: form.license_number,
          issuing_state: form.issuing_state || undefined,
          document_url: form.document_url || undefined,
        }),
      });
      if (!res.ok) throw new Error('failed');
      await res.json();
      setMessage('Submitted. Status: pending');
      setForm({ full_name: '', license_number: '', issuing_state: '', document_url: '' });
      fetchStatuses();
    } catch (e) {
      setMessage('Could not submit. Try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto mt-12 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">KYC / License Verification</h2>
          <p className="text-sm text-white/70">Stubbed flow — submits details and tracks pending status.</p>
        </div>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">Sandbox</span>
      </div>

      <form onSubmit={submit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="full_name">Full name</label>
          <input id="full_name" name="full_name" required value={form.full_name} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="license_number">License number</label>
          <input id="license_number" name="license_number" required value={form.license_number} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="issuing_state">Issuing state</label>
          <input id="issuing_state" name="issuing_state" value={form.issuing_state} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="document_url">Document URL</label>
          <input id="document_url" name="document_url" value={form.document_url} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" placeholder="https://..." />
        </div>
        <div className="sm:col-span-2 flex items-center justify-between">
          <div className="text-sm text-white/80">{message}</div>
          <button type="submit" disabled={submitting} className="inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400 disabled:opacity-60">{submitting ? 'Submitting...' : 'Submit for verification'}</button>
        </div>
      </form>

      <div className="mt-6">
        <h3 className="mb-2 text-sm font-semibold">Recent submissions</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.id} className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{it.id.slice(-6)}</span>
                <span className={`text-xs ${it.status === 'verified' ? 'text-green-400' : it.status === 'failed' ? 'text-red-400' : 'text-amber-300'}`}>{it.status}</span>
              </div>
              {it.reason && <p className="mt-1 text-xs text-white/60">{it.reason}</p>}
            </div>
          ))}
          {items.length === 0 && <div className="text-sm text-white/60">No submissions yet.</div>}
        </div>
      </div>
    </section>
  );
}
