import  { useState } from "react";

export default function Inquiry() {
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    title: "",
    inquiry: "",
    agree: false,
    code: "",
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function generateCaptcha() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.tel || !form.email || !form.title || !form.inquiry)
      return setError("Please fill out all required fields.");
    if (!form.agree)
      return setError("You must agree to the Privacy Policy.");
    if (form.code !== captcha)
      return setError("Incorrect security code. Please try again.");

    setError("");
    setSubmitted(true);
  };

  return (
    <section className="px-6 md:px-20 py-12 bg-primary text-text">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">
          Saving Story is waiting to communicate with you.
        </h2>
        <p className="text-right text-sm text-brand-textMuted marker:mb-6">
          Fields marked with <span className="text-brand-alert">*</span> are required fields.
        </p>

        <hr className="mb-8" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Name <span className="text-brand-alert">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-brand-border rounded-md px-3 py-2 bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-borderFocus"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Tel. <span className="text-brand-alert">*</span>
              </label>
              <input
                name="tel"
                value={form.tel}
                onChange={handleChange}
                className="w-full border border-brand-border rounded-md px-3 py-2 bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-borderFocus"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                E-mail <span className="text-brand-alert">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-brand-border rounded-md px-3 py-2 bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-borderFocus"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Title <span className="text-brand-alert">*</span>
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-brand-border rounded-md px-3 py-2 bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-borderFocus"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Inquiry <span className="text-brand-alert">*</span>
            </label>
            <textarea
              name="inquiry"
              value={form.inquiry}
              onChange={handleChange}
              rows="5"
              className="w-full border border-brand-border rounded-md px-3 py-2 bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-borderFocus"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-2">Privacy Policy</label>
            <div className="border border-brand-border rounded-md bg-brand-lightBg p-3 text-sm text-brand-inputText h-28 overflow-y-scroll">
              The personal information provided through this inquiry is managed according to
              the Personal Information Protection Act, and the collected personal information
              such as name, email address, name of company, and details of inquiry is deleted
              after internal check by Saving Story. You have the right to refuse the personal
              information collection, and your refusal will not result in any disadvantage.
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mr-2 accent-brand-primaryAlpha"
              />
              <label className="text-sm text-brand-textMuted">
                I agree to the collection and use of personal information.
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Security Code <span className="text-brand-alert">*</span>
            </label>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 border border-brand-border bg-brand-surface font-mono tracking-widest text-lg">
                {captcha}
              </div>
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="text-brand-primary hover:text-brand-primaryHover text-xl duration-300"
              >
                ↻
              </button>
              <input
                name="code"
                value={form.code}
                onChange={handleChange}
                placeholder="Enter code"
                className="border border-brand-border rounded-md px-3 py-2 bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-borderFocus"
              />
            </div>
          </div>

          {error && (
            <p className="text-center text-brand-alert font-medium">{error}</p>
          )}

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-brand-primary text-white hover:bg-brand-primaryHover px-10 py-2 rounded-full transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && !error && (
          <p className="text-center text-brand-success mt-6 font-medium">
            ✅ Your inquiry has been submitted successfully. We’ll get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}
