import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div class="container mt-5">
        <hr />
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Quick links</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <Link href="/" class="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link href="/products" class="nav-link p-0 text-muted">
                    products
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link href="/about" class="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Contact Us</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae vitae optio, doloremque magni nihil consectetur
              </p>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p className="text-muted">
                  Monthly digest of whats new and exciting from us.
                </p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column border-top pt-5 text-center">
            <p>© 2023 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
