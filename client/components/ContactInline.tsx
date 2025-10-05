import { useState } from "react";
import { Button } from "@/components/ui/button";
import SuccessPlane from "@/components/SuccessPlane";
import { toast } from "sonner";

export default function ContactInline() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setSent(true);
      // keep the thanks message visible under the form
    } catch (err) {
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName-inline" className="text-sm font-medium">
              First name
            </label>
            <input
              id="firstName-inline"
              name="firstName"
              required
              value={form.firstName}
              onChange={onChange}
              className="w-full rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName-inline" className="text-sm font-medium">
              Last name
            </label>
            <input
              id="lastName-inline"
              name="lastName"
              required
              value={form.lastName}
              onChange={onChange}
              className="w-full rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email-inline" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email-inline"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={onChange}
            className="w-full rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message-inline" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message-inline"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={onChange}
            className="w-full rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
      {sent && (
        <div className="mt-6">
          <SuccessSplash
            title="Thank you!"
            subtitle="Your message has been received."
          />
        </div>
      )}
    </div>
  );
}
