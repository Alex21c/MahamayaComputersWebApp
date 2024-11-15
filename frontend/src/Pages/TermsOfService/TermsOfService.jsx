import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { genLinkTag } from "../../Utils/utils";
export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service";
  }, []);
  return (
    <>
      <Header />
      <div>
        <h2>3. Privacy Policy</h2>

        <h1>Terms of Service</h1>
        <p>
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <p>
          Welcome to Mahamaya Computers. By accessing or using our website, you
          agree to comply with and be bound by the following Terms of Service
          ("Terms"). If you do not agree with these Terms, please do not use our
          website or services.
        </p>

        <h2>1. Use of Our Services</h2>
        <p>
          By using our website, you agree to use our services only for lawful
          purposes and in accordance with our terms. You are prohibited from
          using the website in a way that violates any local, state, national,
          or international laws or regulations.
        </p>

        <h2>2. Account Registration</h2>
        <p>
          To access certain features of our website, you may need to register an
          account. You agree to provide accurate, current, and complete
          information during the registration process and to update this
          information if it changes. You are responsible for maintaining the
          confidentiality of your account credentials.
        </p>

        <h2>3. Privacy Policy</h2>
        <p>
          Your use of our services is also governed by our{" "}
          {genLinkTag("/privacy-policy", "privacy-policy")}, which explains how
          we collect, use, and safeguard your personal information.
        </p>

        <h2>4. Products and Services</h2>
        <p>
          We provide a range of products and services related to computers and
          accessories. All product descriptions, images, and pricing are subject
          to change without notice. We reserve the right to modify or
          discontinue products or services at any time.
        </p>

        <h2>5. Orders and Payments</h2>
        <p>
          When you place an order, you are offering to purchase a product or
          service under the terms and conditions stated. We reserve the right to
          accept or decline any order. Payment must be made at the time of
          purchase. By providing payment information, you authorize us to
          process your order and collect payments as required.
        </p>

        <h2>6. Shipping and Delivery</h2>
        <p>
          We will make reasonable efforts to ship your order within the
          estimated timeframe. Delivery times are subject to change due to
          factors beyond our control. You are responsible for providing accurate
          shipping information to avoid delays.
        </p>

        <h2>7. Return Policy</h2>
        <p>
          <strong>
            Products once shipped cannot be returned or exchanged.
          </strong>{" "}
          Please ensure your order details are accurate before completing the
          purchase.
        </p>

        <h2>8. Warranty and Repairs</h2>
        <p>
          <strong>
            Warranty on products is covered by the brand company only.
          </strong>{" "}
          As a retailer, Mahamaya Computers does not provide any warranty
          services directly. Customers are responsible for contacting the
          brand's customer care center for warranty claims, and items must be
          taken or shipped directly to the brand's authorized service center as
          per the company's warranty policy.
        </p>

        <h2>9. User Responsibilities</h2>
        <p>As a user, you agree to:</p>
        <ul>
          <li>
            Not engage in any illegal activity, including fraud,
            misrepresentation, or hacking.
          </li>
          <li>
            Not attempt to interfere with or disrupt our website or services.
          </li>
          <li>Not post or transmit harmful or abusive content.</li>
        </ul>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Mahamaya Computers will not be
          liable for any indirect, incidental, special, or consequential damages
          arising out of or in connection with your use of the website or
          services. This includes any loss of data, business interruption, or
          loss of profits.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Mahamaya Computers and its
          employees, contractors, and affiliates from any claims, damages, or
          losses arising out of your use of the website, violation of these
          Terms, or violation of any third-party rights.
        </p>

        <h2>12. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account at any time
          if we believe you have violated these Terms or engaged in
          inappropriate behavior. You may also terminate your account by
          contacting us directly.
        </p>

        <h2>13. Governing Law and Jurisdiction</h2>
        <p>
          These Terms will be governed by and construed in accordance with the
          laws of India, without regard to its conflict of law principles. Any
          disputes arising under or in connection with these Terms shall be
          resolved exclusively in the courts of Sunder Nagar, Himachal Pradesh
          (175019).
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update or modify these Terms at any time. When we do, we will
          post the updated version on this page and update the effective date.
          We encourage you to review this page periodically for any changes.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
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
      <Footer />
    </>
  );
}
