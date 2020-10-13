import React, { Component } from "react";

export class HomePage extends Component {
  render() {
    return (
      <div>
        {/* <!-- Start Preloader Area --> */}
        <div className="loader-wrapper">
          <div className="loader">
            <div className="dot-wrap">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
        {/* <!-- End Preloader Area --> */}

        {/* <!-- Start Header Area --> */}
        <header className="header-area">
          {/* <!-- Start Top Header --> */}
          <div className="top-header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-12 col-sm-8 pl-0">
                  <span className="d-block text-white ir-r text-right">
                    ما به رشد هر چه بهتر زبان انگلیسی شما می‌اندیشیم.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Start Top Header --> */}

          {/* <!-- Start Nav Area --> */}
          <div className="navbar-area">
            <div className="mobile-nav">
              <div className="container-fluid">
                <a href="index.html" className="logo">
                  <img
                    className="logo-img"
                    src="/assets/img/logo.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>

            <div className="main-nav">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md">
                  <a className="navbar-brand" href="index.html">
                    <img
                      className="logo-img"
                      src="/assets/img/logo.png"
                      alt="Logo"
                    />
                  </a>

                  <div className="collapse navbar-collapse mean-menu">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <a href="#" className="nav-link ir-r active">
                          خانه
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link ir-r">
                          دوره های آموزشی
                          <i className="bx bx-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="/" className="nav-link ir-r active">
                              دوره 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/" className="nav-link ir-r">
                              دوره 2
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link ir-r">
                          مقالات آموزشی
                          <i className="bx bx-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="/" className="nav-link ir-r active">
                              اسپیکینگ
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/" className="nav-link ir-r">
                              ریدینگ
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/" className="nav-link ir-r">
                              وکب
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/" className="nav-link ir-r">
                              رایتیینگ
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link ir-r">
                          درباره ما
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link ir-r">
                          تماس با ما
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- End Nav Area --> */}
        </header>
        {/* <!-- End Header Area --> */}

        {/* <!-- Start Introduction --> */}
        <section className="index-intro">
          <div className="container">
            <div className="row d-lg-flex align-items-lg-center">
              <div className="col-md-5 img-holder mb-5 mb-lg-0">
                <img
                  className="w-75 d-block mx-auto"
                  src="/assets/img/testimonials-img-2.jpg"
                  alt="وبسایت رسمی رضا رفیعی"
                />
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <h1 className="d-block text-right ir-b mb-3">
                  به وبسایت رسمی رضا رفیعی خوش آمدید
                </h1>
                <p className="d-block text-justify ir-r mb-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز
                </p>
                <a className="default-btn ir-r mb-0" href="#products">
                  مشاهده دوره ها
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Introduction --> */}

        {/* <!-- Start Products --> */}
        <section
          id="products"
          className="services-area services-area-style-two pt-100 pb-70"
        >
          <div className="container">
            <div className="section-title">
              <span className="ir-b">محصولات</span>
              <h2 className="ir-r text-white">محصولات آموزشی</h2>
            </div>

            <div className="row">
              <div className="col-lg-5 col-sm-6 mr-auto">
                <div className="single-services">
                  <i className="flaticon-estimate"></i>
                  <h3 className="ir-b">محصول 1</h3>
                  <p className="ir-r">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز...
                  </p>

                  <a href="single-services.html" className="read-more ir-r">
                    اطلاعات بیشتر
                    <span className="flaticon-next"></span>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-sm-6 ml-auto">
                <div className="single-services">
                  <i className="flaticon-home"></i>
                  <h3 className="ir-b">محصول 2</h3>
                  <p className="ir-r">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز...
                  </p>

                  <a href="single-services.html" className="read-more ir-r">
                    اطلاعات بیشتر
                    <span className="flaticon-next"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="services-bg">
            <img src="/assets/img/services-bg.jpg" alt="Image" />
          </div>
        </section>
        {/* <!-- End Products --> */}

        {/* <!-- Start Pricing Area --> */}
        <section className="price-area price-area-style-two pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="ir-r">قیمت محصولات</span>
              <h2 className="ir-b">یکی از محصولات رو انتخاب کن:</h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-6 mr-auto">
                <div className="single-price-card">
                  <div className="price-title">
                    <h3 className="ir-b">محصول 1</h3>
                    <h2 className="ir-b">
                      400,000<sub>تومان</sub>
                    </h2>
                  </div>

                  <ul>
                    <li className="ir-r">یادگیری به شیوه مادری</li>
                    <li className="ir-r">به شیوه کاربردی</li>
                    <li className="ir-r">بدون خستگی</li>
                    <li className="ir-r">بدون یادگیری لغات</li>
                    <li className="ir-r">بدون یادگیری گرامر</li>
                  </ul>

                  <a
                    href="#"
                    className="default-btn ir-r d-flex justify-content-center"
                  >
                    پرداخت
                    <span className="flaticon-next d-block mr-2"></span>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 ml-auto">
                <div className="single-price-card active">
                  <div className="price-title">
                    <h3 className="ir-b">محصول 2</h3>
                    <h2 className="ir-b">
                      800,000<sub>تومان</sub>
                    </h2>
                  </div>

                  <ul>
                    <li className="ir-r">یادگیری به شیوه مادری</li>
                    <li className="ir-r">به شیوه کاربردی</li>
                    <li className="ir-r">بدون خستگی</li>
                    <li className="ir-r">بدون یادگیری لغات</li>
                    <li className="ir-r">بدون یادگیری گرامر</li>
                  </ul>

                  <a
                    href="#"
                    className="default-btn ir-r d-flex justify-content-center"
                  >
                    پرداخت
                    <span className="flaticon-next d-flex mr-2"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Pricing Area --> */}

        {/* <!-- Start Blog Area --> */}
        <section className="blog-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="ir-b">وبلاگ</span>
              <h2 className="ir-r">آخرین مقالات آموزشی</h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <a href="single-blog.html">
                    <img src="/assets/img/blog-img-1.jpg" alt="Image" />
                  </a>

                  <div className="news-content">
                    <ul className="admin d-flex justify-content-start mb-3">
                      <li className="float ir-r">
                        <i className="bx bx-calendar-alt"></i>
                        1399/6/15
                      </li>
                    </ul>

                    <a href="single-blog.html">
                      <h3 className="ir-b">
                        یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                      </h3>
                    </a>

                    <a href="single-blog.html" className="read-more ir-r">
                      بیشتر
                      <span className="flaticon-next"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <a href="single-blog.html">
                    <img src="/assets/img/blog-img-2.jpg" alt="Image" />
                  </a>

                  <div className="news-content">
                    <ul className="admin d-flex justify-content-start mb-3">
                      <li className="float ir-r">
                        <i className="bx bx-calendar-alt"></i>
                        1399/6/15
                      </li>
                    </ul>

                    <a href="single-blog.html">
                      <h3 className="ir-b">
                        یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                      </h3>
                    </a>

                    <a href="single-blog.html" className="read-more ir-r">
                      بیشتر
                      <span className="flaticon-next"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <a href="single-blog.html">
                    <img src="/assets/img/blog-img-3.jpg" alt="Image" />
                  </a>

                  <div className="news-content">
                    <ul className="admin d-flex justify-content-start mb-3">
                      <li className="float ir-r">
                        <i className="bx bx-calendar-alt"></i>
                        1399/6/15
                      </li>
                    </ul>

                    <a href="single-blog.html">
                      <h3 className="ir-b">
                        یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                      </h3>
                    </a>

                    <a href="single-blog.html" className="read-more ir-r">
                      بیشتر
                      <span className="flaticon-next"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Blog Area --> */}

        {/* <!-- Start Footer Top Area --> */}
        <footer className="footer-top-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-widget">
                  <a href="index.html">
                    <img
                      className="logo-img"
                      src="/assets/img/logo.png"
                      alt="Image"
                    />
                  </a>

                  <p className="ir-r">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>

                  <ul className="social-icon">
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-linkedin-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-footer-widget">
                  <h3 className="ir-b">لینک های مهم</h3>

                  <ul className="import-link">
                    <li>
                      <a className="ir-r" href="#">
                        دوره 1
                      </a>
                    </li>
                    <li>
                      <a className="ir-r" href="#">
                        دوره 2
                      </a>
                    </li>
                    <li>
                      <a className="ir-r" href="#">
                        وبلاگ2
                      </a>
                    </li>
                    <li>
                      <a className="ir-r" href="#">
                        درباره ما
                      </a>
                    </li>
                    <li>
                      <a className="ir-r" href="#">
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-footer-widget">
                  <h3 className="ir-b">تماس با ما</h3>

                  <ul className="address">
                    <li className="location ir-r">
                      <i className="bx bxs-location-plus"></i>
                      تهران، میدان آزادی، نمایشگاه بین المللی شهر آفتاب.
                    </li>
                    <li>
                      <i className="bx bxs-envelope"></i>
                      <a className="ir-r" href="mailto:hello@example.com">
                        hello@example.com
                      </a>
                    </li>
                    <li>
                      <i className="bx bxs-phone-call"></i>
                      <a className="ir-r" href="tel:09121111111">
                        0912-111-1111
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer Top Area --> */}

        {/* <!-- Start Footer Bottom Area --> */}
        <footer className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <p className="d-block text-center ir-r">
                  طراحی شده توسط{" "}
                  <a href="https://tad-group.ir/" target="blank">
                    گروه تاد
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer Bottom Area --> */}

        {/* <!-- Start Go Top Area --> */}
        <div className="go-top">
          <i className="bx bx-chevrons-up"></i>
          <i className="bx bx-chevrons-up"></i>
        </div>
      </div>
    );
  }
}
