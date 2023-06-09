import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import data from "../../lib/data";
import Icon from "../../components/icon";

export default function DefaultLayout({ children, page }) {
  const title = page.data.title
    ? `${page.data.title} | ${data.seo.site_title}`
    : data.seo.site_title;
  const description = page.data.description || data.seo.description;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          href="/touch-icon.png"
          sizes="192x192"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <NextSeo
        title={title}
        description={description}
        openGraph={{
          site_name: data.seo.site_name,
          url: data.site.url,
          title: title,
          description: description,
          images: data.seo.images.map((image) => ({
            url: image.image,
            width: image.height,
            height: image.width,
            alt: image.description,
          })),
        }}
      />

      <header
      // style={{ backgroundImage: "url(/uploads/logo.png)" }}
      // className={page.data.large_header ? "main-hero" : ""}
      >
        <div className="container">
          <h1>
            <Link href="/">{data.company.company_name}</Link>
          </h1>
          <nav>
            {/* <h4 className="company-name">Solicitador</h4> */}
            <img src={"/uploads/logo.png"} alt="Solicitador" width="270" />
            <ul>
              <li>
                <Link
                  href="/about"
                  className={page.slug === "about" ? "active" : ""}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={page.slug === "services" ? "active" : ""}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={page.slug === "contact" ? "active" : ""}
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={page.slug === "blog" ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="main">
        <div className="container">{children}</div>
      </section>

      {page.data.call_to_action === "Contact" && (
        <section className="quote-section">
          <p className="container">
            <Link href="/contact">Contacte nos</Link> hoje para saber como o
            podemos ajudar.
          </p>
        </section>
      )}

      {page.data.call_to_action === "Blog" && (
        <section className="quote-section">
          <p className="container">
            Leia o nosso <Link href="/blog">Blog</Link> acerca das últimas
            novidades sobre o Direito e Legislação em Portugal.
          </p>
        </section>
      )}

      {/* {page.data.call_to_action === "Services" && (
        <section className="quote-section">
          <p className="container">
            <Link href="/services">
              Esteja à vontade para entrar em contacto
            </Link>
            e tirar as suas dúvidas, caso não encontre o serviço pretendido no
            site.
          </p>
        </section>
      )} */}

      <footer>
        <div className="container">
          <div
            className="footer-columns"
            data-cms-editor-link="cloudcannon:collections/content/data/footer.json"
          >
            {data.footer.map((column) => (
              <ul className="footer-links" key={column.title}>
                <li>
                  <h2>{column.title}</h2>
                </li>

                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      target={link.new_window ? "_blank" : "_self"}
                    >
                      {link.social_icon && <Icon icon={link.social_icon} />}{" "}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}

            <ul className="footer-links">
              <li>
                <h2>{data.company.company_name}</h2>
              </li>
              <li>{data.company.description}</li>
              <li>
                <Link href="/feed.xml">
                  <Icon icon="RSS" /> Subscreve com RSS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal-line">
          <p className="container">
            &copy; {new Date().getFullYear()} {data.company.company_name} &bull;{" "}
            <Link href="/privacy">Política de Privacidade</Link> &bull;
            <Link href="/terms">Termos e Condições</Link> &bull; Desenvolvido
            por{" "}
            <Link href="https://creativelightbox.net/">Creative Lightbox</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
