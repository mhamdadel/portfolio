import { useState } from "react";
import { toast } from "react-toastify";
import "./FooterComponent.css";
import Swal from "sweetalert2";

const FooterComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("منا قلت لك مش شغالة =)");
    Swal.fire({
      icon: "error",
      title: "This Future will Coming Soon!",
      text: "Please go to contact page and contact me with many ways!",
      footer: '<a style="font-weight: bold; font-size: 1.5rem; color: var(--info-color);" href="/contact-me">Contact Me</a>'
    });
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    const button = e.target;
    const buttonRect = button.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const offsetX = mouseX - buttonRect.left;
    const offsetY = mouseY - buttonRect.top;
    const centerX = buttonRect.width / 2;
    const centerY = buttonRect.height / 2;
    const maxOffset = 200;
    const moveX = -((offsetX - centerX) / centerX * maxOffset);
    const moveY = -((offsetY - centerY) / centerY * maxOffset);
    const moveZ = -(Math.sqrt(moveX * moveX + moveY * moveY));
    button.style.transform = `translate3d(${moveX}px, ${moveY}px, ${moveZ}px) rotateY(${moveX / 10}deg) rotateX(${moveY / 10}deg) rotateZ(${moveZ / 10}deg)`;

  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    // e.target.style.transform = "";
  };

  return (
    <footer id="FooterComponent" className="bg-surface text-on-surface p-8 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-on-surface">
              Contact Us (Coming Soon)
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-on-surface"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-on-surface"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-on-surface"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-2/4 bg-primary text-on-primary py-2 px-4 rounded-md hover:bg-error transition-transform"
                
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-primary text-2xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-on-surface mb-4">
              Feel free to reach out to us with any questions or comments. We'd
              love to hear from you!
            </p>
            <p className="text-on-surface mb-2">
              <strong className="text-primary">Email:</strong>{" "}
              muhammed.adel.elshall@gmail.com
            </p>
            <p className="text-on-surface mb-2">
              <strong className="text-primary">Phone:</strong> +201110894640
            </p>
            <p className="text-on-surface">
              <strong className="text-primary">Address:</strong> Haram Street,
              Giza, Egypt
            </p>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
