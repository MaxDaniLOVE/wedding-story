import { LINK_IDS } from "@/shared/constants";

export interface User {
  name: string
  question: string
  answer: string[]
  welcome: string
}

export type SectionIds = typeof LINK_IDS[keyof typeof LINK_IDS];
