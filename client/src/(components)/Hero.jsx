
import React from "react";

export const Hero = () => {
 

  

  return (
    <div className="flex flex-col items-center">
      <section className="bg-white lg:grid lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Manage Your Expenses
              <strong className="text-indigo-600"> Control Your Money </strong>
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Your all-in-one companion to track, analyze, and grow your money
            </p>
            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <button
              
                className="inline-block rounded border border-indigo-500 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-black hover:border-black"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <img
        src="/dashboard.webp"
        alt="dashboard"
        width={1000}
        height={500}
        className="rounded-xl border-2"
      />
    </div>
  );
};


