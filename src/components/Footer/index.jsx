const Footer = () => {
  const today = new Date();
  return (
    <footer className="site-footer p-4">
      <p>© Copyright {today.getFullYear()} Are Media PTY Limited</p>
    </footer>
  );
};

export default Footer;
