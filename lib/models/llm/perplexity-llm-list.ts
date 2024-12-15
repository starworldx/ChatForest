import { LLM } from "@/types"

const PERPLEXITY_PLATORM_LINK =
  "https://docs.perplexity.ai/docs/getting-started"

// Perplexity Models (UPDATED 2/25/24) -----------------------------
// Model Deprecation Notice
// Please note that on March 15, the pplx-70b-chat, pplx-70b-online, llama-2-70b-chat, and codellama-34b-instruct models will no longer be available through the Perplexity API.

// Sonar Medium Online (UPDATED 2/25/24)
const PERPLEXITY_SONAR_HUGE_ONLINE: LLM = {
  modelId: "llama-3.1-sonar-huge-128k-online",
  modelName: "Sonar Medium Online",
  provider: "perplexity",
  hostedId: "llama-3.1-sonar-huge-128k-online",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

export const PERPLEXITY_LLM_LIST: LLM[] = [PERPLEXITY_SONAR_HUGE_ONLINE]
