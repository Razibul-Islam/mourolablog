const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-24 bg-primary text-white text-center">
      <h1 className="text-3xl font-bold mb-3">MOUROLA BLOG</h1>
      <p className="text-lg">&copy; {year} Your Blog Site. All rights reserved.</p>
    </div>
  );
};

export default Footer;
