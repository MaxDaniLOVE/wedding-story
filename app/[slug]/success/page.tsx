import { SuccessPage } from "@/components/pages/SuccessPage";
import { INVITED_FRIENDS_INFO } from "@/shared/constants";

const staticSlugs = Object.keys(INVITED_FRIENDS_INFO)

export function generateStaticParams() {
  return staticSlugs.map((slug) => ({ slug }));
}

export default function Home() {
  return <SuccessPage />
}
