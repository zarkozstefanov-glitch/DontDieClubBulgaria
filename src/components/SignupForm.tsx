"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend / Google Forms / etc.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-green-soft/15 shadow-lg shadow-green-primary/5">
      <span className="mb-3 inline-flex rounded-full bg-earth/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-earth">
        Идваш за първи път?
      </span>
      <h3 className="font-heading font-bold text-2xl mb-2 text-text-dark">Запази място за неделя</h3>
      <p className="text-sm text-text-dark/60 mb-6">
        Остави име и контакт. Ще ти изпратим точната локация, час и какво да носиш.
      </p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-heading font-bold text-green-primary">Благодарим ти!</p>
            <p className="text-sm text-text-dark/60 mt-1">Ще се свържем скоро.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-text-dark/70 mb-1.5">Име</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                className="w-full px-4 py-2.5 rounded-xl border border-green-soft/30 bg-warm-bg text-text-dark focus:outline-none focus:border-green-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark/70 mb-1.5">Телефон или Instagram</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="@username или 0888..."
                className="w-full px-4 py-2.5 rounded-xl border border-green-soft/30 bg-warm-bg text-text-dark focus:outline-none focus:border-green-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark/70 mb-1.5">Съобщение (по желание)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Имаш ли въпрос или нещо, което искаш да споделиш?"
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-green-soft/30 bg-warm-bg text-text-dark focus:outline-none focus:border-green-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-green-primary text-white rounded-xl font-bold hover:bg-green-primary/90 transition-colors shadow-lg shadow-green-primary/20"
            >
              Искам да дойда
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
