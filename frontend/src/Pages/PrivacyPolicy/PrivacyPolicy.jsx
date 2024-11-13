import { useEffect } from "react";
export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy";
  }, []);
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 13-Nov-2024
      </p>

      <p>
        Welcome to Mahamaya Computers online store. We prioritize the privacy of
        our customers and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your
        data when you use our services, including when signing up with your
        Google account.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect the following types of information when you interact with
        our site:
      </p>
      <ul>
        <li>
          <strong>Personal Information:</strong> When you sign up or log in with
          your Google account, we may collect basic information such as your
          name, email address, and profile picture.
        </li>
        <li>
          <strong>Transaction Information:</strong> Details regarding the
          products you purchase, order history, and payment methods.
        </li>
        <li>
          <strong>Device Information:</strong> Information about the devices you
          use to access our website, such as IP addresses, browser type, and
          device type.
        </li>
        <li>
          <strong>Usage Information:</strong> Details on how you interact with
          our website, including pages visited and links clicked.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>To provide and improve our services and products</li>
        <li>To process and fulfill orders, including payments and shipping</li>
        <li>
          To communicate with you about updates, promotions, and relevant offers
        </li>
        <li>
          To ensure the security of our services and protect against
          unauthorized activity
        </li>
      </ul>

      <h2>3. Google OAuth Integration</h2>
      <p>
        When you choose to sign in/up using your Google account, we may collect
        your profile information as permitted by Google's terms. This helps us
        streamline the registration process. We do not have access to your
        Google password, and Google handles the authentication process.
      </p>

      <h2>4. Sharing and Disclosure of Information</h2>
      <p>
        We do not sell or rent your personal information to third parties.
        However, we may share data with:
      </p>
      <ul>
        <li>
          <strong>Service Providers:</strong> Trusted third parties who assist
          us in operating our website, processing payments, and delivering
          orders.
        </li>
        <li>
          <strong>Legal Requirements:</strong> To comply with legal obligations
          or enforce our terms and conditions.
        </li>
      </ul>

      <h2>5. Security of Your Information</h2>
      <p>
        We use industry-standard security measures to protect your personal
        information. However, no method of transmission over the internet or
        method of electronic storage is entirely secure, and we cannot guarantee
        its absolute security.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have rights regarding your personal data, including:</p>
      <ul>
        <li>Accessing the personal information we hold about you</li>
        <li>Updating or correcting your personal information</li>
        <li>
          Requesting deletion of your data, subject to certain legal obligations
        </li>
      </ul>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page, and we encourage you to review it regularly.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have questions or concerns about our Privacy Policy, please
        contact us at:
      </p>

      <address>
        <strong>Mahamaya Computers</strong>
        <br />
        VPO Ner Chowk, Tehsil Balh, District Mandi, H.P. (175008)
        <br />
        GSTIN : 02DHKPK4447R1ZS
        <br />
        Email: aasalex21c@gmail.com
        <br />
        Phone: +91 82787-03404
      </address>
    </div>
  );
}
