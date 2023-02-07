import PageLayout from "../components/layouts/page";

export default function NotFound() {
  return (
    <PageLayout
      page={{
        data: {
          title: "Not Found",
          call_to_action: "Contact",
          large_header: false,
        },
      }}
    >
      <p>Esta Página não&apos;t existe.</p>
    </PageLayout>
  );
}
