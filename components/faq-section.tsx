import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() \{
  const faqs = [
    \{
      question: "What models do you use?",
      answer: "We leverage a combination of proprietary and open-source large language models (LLMs) optimized for metadata extraction and governance. Our system is designed to be model-agnostic, allowing for flexibility and future integration of new models.",
    \},
    \{
      question: "Can we use Deasy via API?",
      answer: "Yes, Deasy offers a comprehensive set of APIs that allow seamless integration into your existing workflows and applications. This provides maximum flexibility for developers and data teams.",
    \},
    \{
      question: "What do you mean by 'metadata'?",
      answer: "Metadata, in our context, refers to data about data. It includes tags, labels, classifications, and other descriptive information that helps organize, understand, and manage unstructured content, making it more discoverable and usable for AI applications.",
    \},
    \{
      question: "How does Deasy validate the accuracy of the metadata?",
      answer: "Deasy employs a human-in-the-loop validation process, allowing domain experts to review and fine-tune AI-generated metadata. This iterative feedback loop continuously improves the accuracy and relevance of the metadata.",
    \},
    \{
      question: "What type of data do you support?",
      answer: "Deasy supports a wide range of unstructured data types, including text documents (PDFs, Word docs, plain text), emails, chat logs, and more. Our platform is designed to handle diverse data formats.",
    \},
    \{
      question: "Can I bring my existing data dictionary into Deasy?",
      answer: "Absolutely. Deasy allows you to import and integrate your existing data dictionaries and taxonomies, ensuring consistency and leveraging your established knowledge base.",
    \},
    \{
      question: "Do you chunk the underlying data before tagging?",
      answer: "Yes, our process involves intelligently chunking the underlying data to optimize LLM performance and ensure precise, context-aware tagging at a granular level, which is then synthesized to file-level metadata.",
    \},
    \{
      question: "What data connectors do you support?",
      answer: "We support a variety of data connectors for popular cloud storage solutions (e.g., AWS S3, Google Cloud Storage, Azure Blob Storage) and enterprise systems. We are continuously expanding our integration capabilities.",
    \},
    \{
      question: "How does your auto-suggested metadata functionality work?",
      answer: "Our auto-suggested metadata functionality uses advanced AI algorithms to analyze your unstructured content and automatically propose relevant tags and classifications based on patterns and context within your data.",
    \},
    \{
      question: "Where is the data stored?",
      answer: "Data can be stored in your private cloud environment or on-premises, depending on your deployment preferences. Deasy is designed to integrate securely with your existing infrastructure.",
    \},
    \{
      question: "Does data leave our systems?",
      answer: "No, with our secure deployment options, your data remains within your control and does not leave your systems. We prioritize data privacy and security.",
    \},
    \{
      question: "How does your pricing work?",
      answer: "Our pricing is tailored to your specific needs and usage. Please contact us for a personalized quote and to discuss the best plan for your organization.",
    \},
  ]

  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white grid-background">
      <div className="container px-4 md:px-6 text-center space-y-12">
        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-300">FAQ</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Common questions – answered</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-left">
          \{faqs.map((faq, index) => (
            <AccordionItem key=\{index\} value=\{`item-$\{index\}`\} className="border-b border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline py-4">
                \{faq.question\}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                \{faq.answer\}
              </AccordionContent>
            </AccordionItem>
          ))\}
        </Accordion>
      </div>
    </section>
  )
\}
