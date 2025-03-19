import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form/input";
import { TextAreaField } from "@/components/ui/form/textarea";
import { useState } from "react";

const API_URL = `${process.env.NEXT_PUBLIC_RAKABACKEND_URL}/api/email/send`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      alert("Message sent successfully!");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 lg:p-20">
      <InputField
        label="Your Name"
        type="text"
        name="from_name"
        value={formData.from_name}
        onChange={handleChange}
      />
      <InputField
        label="Your Email"
        type="email"
        name="from_email"
        value={formData.from_email}
        onChange={handleChange}
      />
      <TextAreaField
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <Button
        className="bg-[#00423b] text-white cursor-pointer hover:bg-[#16cab5]"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
