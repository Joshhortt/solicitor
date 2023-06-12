import PageLayout from "../components/layouts/page";
import data from "../lib/data";
import Filer from "@cloudcannon/filer";

const filer = new Filer({ path: "content" });

export default function Contact({ page }) {
  return (
    <PageLayout page={page}>
      <div className="columns">
        <div className="column">
          <p className="editor-link">
            <a
              href="cloudcannon:collections/content/data/company.json"
              className="btn"
            >
              <strong>&#9998;</strong> Update Company Details
            </a>
          </p>

          <label>Telefone</label>
          <p className="contact-info">
            <a href={`tel:${data.company.phone}`}>{data.company.phone}</a>
          </p>

          <label>E-mail</label>
          <p className="contact-info">
            <a href={`mailto:${data.company.contact_email_address}`}>
              {data.company.contact_email_address}
            </a>
          </p>

          <label>E-mail 2</label>
          <p className="contact-info">
            <a href={`mailto:${data.company.contact_email_address2}`}>
              {data.company.contact_email_address2}
            </a>
          </p>

          <label>E-mail 3</label>
          <p className="contact-info">
            <a href={`mailto:${data.company.contact_email_address3}`}>
              {data.company.contact_email_address3}
            </a>
          </p>

          <label>Código Postal</label>
          <address
            className="contact-info"
            dangerouslySetInnerHTML={{
              __html: data.company.postal_address.replace(/,/g, "<br>"),
            }}
          ></address>

          <label>Morada</label>
          <address
            className="contact-info"
            dangerouslySetInnerHTML={{
              __html: data.company.address.replace(/,/g, "<br>"),
            }}
          ></address>
        </div>

        <div className="column">
          <form method="post" action="/contact-success">
            <label htmlFor="email_address">E-mail</label>
            <input id="email_address" type="text" name="email" />

            <label htmlFor="name">Nome</label>
            <input id="name" type="text" name="name" />

            <label htmlFor="_subject">Assunto</label>
            <input id="_subject" type="text" name="subject" />

            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message"></textarea>

            <input
              type="hidden"
              name="_to"
              value={data.company.contact_email_address}
            />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <input type="submit" value="Enviar Mensagem" />
          </form>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps({ params }) {
  const page = await filer.getItem("contact.md", { folder: "pages" });

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
    },
  };
}
