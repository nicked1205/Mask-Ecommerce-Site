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
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">
          Saving Story is waiting to communicate with you.
        </h2>
        <p className="text-right text-sm text-gray-500 mb-6">
          Fields marked with <span className="text-red-500">*</span> are required fields.
        </p>

        <hr className="mb-8" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Tel. <span className="text-red-500">*</span>
              </label>
              <input
                name="tel"
                value={form.tel}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Inquiry <span className="text-red-500">*</span>
            </label>
            <textarea
              name="inquiry"
              value={form.inquiry}
              onChange={handleChange}
              rows="5"
              className="w-full border rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-700"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-2">Privacy Policy</label>
            <div className="border rounded-md bg-gray-50 p-3 text-sm text-gray-700 h-28 overflow-y-scroll">
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
                className="mr-2 accent-red-700"
              />
              <label className="text-sm text-gray-700">
                I agree to the collection and use of personal information.
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Security Code <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 border bg-gray-100 font-mono tracking-widest text-lg">
                {captcha}
              </div>
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="text-gray-600 hover:text-red-700 text-xl"
              >
                ↻
              </button>
              <input
                name="code"
                value={form.code}
                onChange={handleChange}
                placeholder="Enter code"
                className="border rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
          </div>

          {error && (
            <p className="text-center text-red-600 font-medium">{error}</p>
          )}

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-red-800 text-white px-10 py-2 rounded-full hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && !error && (
          <p className="text-center text-green-600 mt-6 font-medium">
            ✅ Your inquiry has been submitted successfully. We’ll get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}
