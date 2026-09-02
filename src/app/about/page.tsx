export default function AboutPage() {
  return (
    <main id="about-page">
      <div className="about-page-container">
        <h1 className="about-page-title">about.</h1>

        <p className="about-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="about-media-row">
          <div className="about-image-placeholder" aria-hidden="true" />
          <div className="about-sidebar-links">
            <a
              href="https://www.linkedin.com/in/rchen0714"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:rc071404@bu.edu">Email</a>
          </div>
        </div>

        <p className="about-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </main>
  );
}
