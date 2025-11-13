import React from "react";

const Policy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  dark:text-gray-200 leading-relaxed">
      <title>FinEase | Privacy Policy</title>
      <h1 className="text-3xl font-semibold text-purple-600 mb-4">
        Privacy Policy
      </h1>
      <p className="mb-4">
        At <strong>FinEase</strong>, your privacy is our top priority. This
        Privacy Policy explains how we collect, use, and protect your
        information when you use our website and services.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p>
        We may collect personal information such as your name, email address,
        and usage data when you register or use our services. We also gather
        non-personal information like browser type and device details for
        analytics purposes.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p>
        The collected data helps us improve our services, personalize your
        experience, and ensure security. We do not sell, rent, or share your
        information with third parties without your consent.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        3. Data Security
      </h2>
      <p>
        We use modern security measures to protect your data from unauthorized
        access, alteration, or loss. However, no method of transmission over the
        Internet is completely secure.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        4. Cookies
      </h2>
      <p>
        Our site may use cookies to enhance your browsing experience. You can
        disable cookies in your browser settings if you prefer not to use them.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        5. Your Rights
      </h2>
      <p>
        You have the right to access, update, or delete your personal data at
        any time. Please contact us at{" "}
        <a
          href="mailto:support@finease.com"
          className="text-purple-500 underline"
        >
          support@finease.com
        </a>{" "}
        for any privacy-related concerns.
      </p>

      <h2 className="text-xl font-semibold text-purple-500 mt-6 mb-2">
        6. Updates to This Policy
      </h2>
      <p>
        We may update this Privacy Policy occasionally. Updates will be posted
        on this page with the revised date.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Policy;
