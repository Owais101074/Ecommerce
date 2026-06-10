import React, { useState } from "react";

const Textarea = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
    setFeedback("");
  };

  return (
    <section className="text-gray-200 body-font py-10">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-8">
          
          <h2 className="text-4xl font-extrabold text-amber-400 mb-6 text-center tracking-wide">
            FEEDBACK
          </h2>

          <p className="text-slate-300 text-center mb-6">
            We'd love to hear your thoughts, suggestions, or feedback.
          </p>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            rows={6}
            className="w-full p-4 bg-slate-900/70 text-white border border-slate-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-400"
          />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              className="inline-flex text-slate-900 bg-amber-400 border-0 py-3 px-8 focus:outline-none hover:bg-amber-500 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              SUBMIT
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Textarea;