function FooterComponent() {
  // Store current year
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="container-footer text-center">
        <footer>
          <p>CopyrightÂ© {currentYear} Demario Douce. All rights reserved.</p>
        </footer>
      </section>
    </>
  );
}

export default FooterComponent;
