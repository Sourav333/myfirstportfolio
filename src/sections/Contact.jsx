import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_8so808x",
        "template_1kcd91s",
        {
          from_name: formData.name,
          to_name: "Sourav",
          from_email: formData.email,
          to_email: "souravgenai13@gmail.com",
          message: formData.message,
        },
        "pSdxF7tXSTZFM_1Df"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "Something went wrong!");
    }
  };
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center c-space section-spacing min-h-screen"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-1 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-6 mb-10">
          <h2 className="text-3xl font-semibold text-white">Let's Talk</h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
          Whether you're building something new, refining an existing idea, or just exploring possibilities — I'm here to help.
          </p>
        </div>

        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="field-label text-2xl">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus py-3 text-base"
              placeholder="Sourav Nandi"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="field-label text-2xl">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus py-3 text-base"
              placeholder="sourav.nandi@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="field-label text-2xl">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="field-input field-input-focus py-3 text-base"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-4 text-lg md:text-xl font-medium text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
