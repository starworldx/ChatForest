import { LLM } from "@/types"

const GROQ_PLATORM_LINK = "https://groq.com/"

const LLaMA3_3_70B: LLM = {
  modelId: "llama-3.3-70b-versatile",
  modelName: "LLaMA3-70b-chat",
  provider: "groq",
  hostedId: "llama-3.3-70b-versatile",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.79
  }
}

export const GROQ_LLM_LIST: LLM[] = [LLaMA3_3_70B]
