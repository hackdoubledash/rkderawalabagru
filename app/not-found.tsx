import { ArrowLink, PageTitle } from "./components/editorial";

export default function NotFound() {
  return <PageTitle title="A missing leaf" description="This page is missing from the archive. Return to the home page or browse the textile collections." variant="missing-page">
    <div className="inline-links"><ArrowLink href="/">Return home</ArrowLink><ArrowLink href="/collections">Browse collections</ArrowLink></div>
  </PageTitle>;
}
