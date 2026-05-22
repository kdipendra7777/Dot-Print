import { useState } from "react";
import axios from "axios";

const FranchiseApply = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    city: "",
    pincode: "",
    firmName: "",
    occupation: "",
    runningBusiness: "",
    experience: "",
    investment: "",
    funding: "",
    space: "",
    timeline: "",
    gst: "",
    location: "",
    why: "",
    support: "",
    involvement: "",
    message: "",
    reference: "",
    callTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/franchise/apply", formData);
      alert("Application Submitted 🚀");
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">

      <div>
        <h2 className="text-3xl font-semibold text-[#1f1f1f]">
          Apply for Dot Print Franchise
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          Fill your details and our team will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* BASIC */}
        <Section title="Basic Contact">
          <Grid>
            <Input name="name" placeholder="Full Name" onChange={handleChange}/>
            <Input name="phone" placeholder="Mobile Number" onChange={handleChange}/>
            <Input name="whatsapp" placeholder="WhatsApp Number (optional)" onChange={handleChange}/>
            <Input name="email" placeholder="Email Address" onChange={handleChange}/>
            <Input name="city" placeholder="City" onChange={handleChange}/>
            <Input name="pincode" placeholder="Pin Code" onChange={handleChange}/>
          </Grid>
        </Section>

        {/* BUSINESS */}
        <Section title="Business Details">
          <Grid>
            <Input name="firmName" placeholder="Firm / Business Name" onChange={handleChange}/>
            
            <Select name="occupation" onChange={handleChange}
              options={["Current Occupation", "Business", "Job", "Student"]}
            />

            <Select name="runningBusiness" onChange={handleChange}
              options={["Running Printing Business?", "Yes", "No"]}
            />

            <Input name="experience" placeholder="Years of Experience" onChange={handleChange}/>
          </Grid>
        </Section>

        {/* INVESTMENT */}
        <Section title="Investment & Capacity">
          <Grid>

            <Select name="investment" onChange={handleChange}
              options={[
                "Estimated Investment",
                "₹1 – 3 Lakhs",
                "₹3 – 5 Lakhs",
                "₹5 – 10 Lakhs",
                "Above ₹10 Lakhs"
              ]}
            />

            <Select name="funding" onChange={handleChange}
              options={["Funding Source", "Own", "Loan", "Mixed"]}
            />

            <Input name="space" placeholder="Shop / Space (sq.ft.)" onChange={handleChange}/>

            <Select name="timeline" onChange={handleChange}
              options={[
                "Timeline to Start",
                "Immediately",
                "1–3 Months",
                "3–6 Months"
              ]}
            />

          </Grid>
        </Section>

        {/* COMPLIANCE */}
        <Section title="Compliance">
          <Grid>
            <Select name="gst" onChange={handleChange}
              options={["GST Available?", "Yes", "No"]}
            />
            <Input name="location" placeholder="Preferred Location (Area)" onChange={handleChange}/>
          </Grid>
        </Section>

        {/* INTENT */}
        <Section title="Your Interest">
          <Textarea name="why" placeholder="Why do you want Dot Print franchise?" onChange={handleChange}/>
          <Textarea name="support" placeholder="Expected support (training, marketing...)" onChange={handleChange}/>
          
          <Select name="involvement" onChange={handleChange}
            options={["Daily Involvement", "Full-time", "Part-time"]}
          />
        </Section>

        {/* EXTRA */}
        <Section title="Additional Info">
          <Textarea name="message" placeholder="Message / Notes" onChange={handleChange}/>
          <Input name="reference" placeholder="Reference (if any)" onChange={handleChange}/>
          
          <Select name="callTime" onChange={handleChange}
            options={["Preferred Call Time", "Morning", "Afternoon", "Evening"]}
          />
        </Section>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-4 rounded-full bg-black text-white font-semibold hover:opacity-90 transition"
        >
          Request Franchise Call
        </button>

        <p className="text-xs text-gray-400 text-center">
          🔒 Your information is safe with us
        </p>

      </form>
    </div>
  );
};

export default FranchiseApply;


/* ================= COMPONENTS ================= */

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-black pl-3">
      {title}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const Grid = ({ children }) => (
  <div className="grid md:grid-cols-2 gap-4">{children}</div>
);

const Input = ({ name, placeholder, onChange }) => (
  <input
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black outline-none"
  />
);

const Select = ({ name, options, onChange }) => (
  <select
    name={name}
    onChange={onChange}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black outline-none"
  >
    {options.map((opt, i) => (
      <option key={i} value={opt}>{opt}</option>
    ))}
  </select>
);

const Textarea = ({ name, placeholder, onChange }) => (
  <textarea
    name={name}
    rows="3"
    placeholder={placeholder}
    onChange={onChange}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black outline-none"
  />
);