const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <div className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </div>
  );
};

export default Footer;
