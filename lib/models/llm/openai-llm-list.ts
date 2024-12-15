import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 11/24/2024) -----------------------------
const gpt4o: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10.0
  }
}

// o1-mini (UPDATED 11/24/2024)
const o1_mini: LLM = {
  modelId: "o1-mini",
  modelName: "o1-mini",
  provider: "openai",
  hostedId: "o1-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3.0,
    outputCost: 12.0
  }
}

// GPT-4o Mini (UPDATED 11/24/2024)
const gpt_4o_mini: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "gpt-4o-mini",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

export const OPENAI_LLM_LIST: LLM[] = [gpt_4o_mini, gpt4o, o1_mini]
