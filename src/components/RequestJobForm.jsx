import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function RequestJobForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: 'General Construction',
    description: '',
    budget: '',
    location: '',
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  async function submit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });
    try {
      const res = await fetch(`${API_BASE}/jobs/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          project_type: form.project_type,
          description: form.description || undefined,
          budget: form.budget ? parseFloat(form.budget) : undefined,
          location: form.location || undefined,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      const data = await res.json();
      setStatus({ loading: false, success: true, message: data.message || 'Submitted' });
      setForm({ name: '', email: '', phone: '', project_type: 'General Construction', description: '', budget: '', location: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, message: 'Something went wrong. Please try again.' });
    }
  }

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  return (
    <section className="mx-auto mt-12 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
      <h2 className="mb-2 text-xl font-bold">Request a Job</h2>
      <p className="mb-6 text-sm text-white/70">Tell us what you need built. We’ll review and get back quickly.</p>
      <form onSubmit={submit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-xs text-white/70" htmlFor="name">Full name</label>
          <input id="name" name="name" required value={form.name} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40 focus:border-orange-500" placeholder="Jane Builder" />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-xs text-white/70" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" placeholder="jane@site.com" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={form.phone} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="project_type">Project type</label>
          <select id="project_type" name="project_type" value={form.project_type} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500">
            <option>General Construction</option>
            <option>Renovation</option>
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>Landscaping</option>
            <option>Concrete</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs text-white/70" htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={4} value={form.description} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" placeholder="Scope, timing, constraints..." />
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="budget">Budget (USD)</label>
          <input id="budget" name="budget" type="number" min="0" step="0.01" value={form.budget} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" placeholder="5000" />
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/70" htmlFor="location">Location</label>
          <input id="location" name="location" value={form.location} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-orange-500" placeholder="City, State" />
        </div>
        <div className="sm:col-span-2 flex items-center justify-between pt-2">
          <div className={`text-sm ${status.success === false ? 'text-red-400' : 'text-green-400'}`}>{status.message}</div>
          <button type="submit" disabled={status.loading} className="inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400 disabled:opacity-60">
            {status.loading ? 'Submitting...' : 'Submit request'}
          </button>
        </div>
      </form>
    </section>
  );
}
