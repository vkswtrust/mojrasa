import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/Chrome";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Enquiry — MojRasa Cashew Feni" },
      {
        name: "description",
        content:
          "Send an enquiry to the MojRasa team about our Goan cashew feni, gift sets, gifting or distribution.",
      },
      { property: "og:title", content: "Enquiry — MojRasa Cashew Feni" },
      {
        property: "og:description",
        content: "Message the MojRasa team about our premium Goan cashew feni and gift sets.",
      },
    ],
  }),
  component: EnquiryPage,
});

function EnquiryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="Enquiry" />
      <div className="pt-6">
        <EnquiryForm />
      </div>
      <Footer />
    </div>
  );
}
