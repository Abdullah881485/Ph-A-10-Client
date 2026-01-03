import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  dark:text-base-400 leading-relaxed">
      <title>FinEase | Terms & Conditions</title>
      <h1 className="text-3xl font-semibold text-purple-600 mb-4">
        Terms & Conditions
      </h1>

      <p className="mb-4">
        Welcome to <strong>FinEase</strong>. By accessing or using our services,
        you agree to the following terms and conditions. Please read them
        carefully.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p>
        By using FinEase, you agree to comply with these Terms & Conditions. If
        you do not agree, please do not use our platform.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        2. Use of Our Service
      </h2>
      <p>
        You may use FinEase only for lawful purposes. You agree not to misuse
        the platform, attempt to hack, or access data you are not authorized to.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        3. Account Responsibility
      </h2>
      <p>
        You are responsible for maintaining your account credentials and any
        activity that occurs under your account. Notify us immediately if you
        suspect unauthorized access.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        4. Intellectual Property
      </h2>
      <p>
        All content, designs, and materials available on FinEase are the
        property of FinEase or its licensors and are protected by copyright
        laws. You may not reproduce or redistribute without permission.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        5. Limitation of Liability
      </h2>
      <p>
        FinEase is not responsible for any damages resulting from the use or
        inability to use the platform. All services are provided “as is” without
        warranties of any kind.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        6. Termination
      </h2>
      <p>
        We reserve the right to suspend or terminate your account at any time
        for violating our terms or engaging in harmful behavior.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        7. Changes to Terms
      </h2>
      <p>
        We may revise these Terms from time to time. Updates will be posted here
        with the new effective date.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Terms;
