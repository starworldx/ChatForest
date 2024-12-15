import { LLM } from "@/types"

const MISTRAL_PLATORM_LINK = "https://docs.mistral.ai/"

// Mistral Large (UPDATED 11/24/2024)
const MISTRAL_LARGE: LLM = {
  modelId: "mistral-large-latest",
  modelName: "Mistral Large",
  provider: "mistral",
  hostedId: "mistral-large-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2,
    outputCost: 6
  }
}

// Pixtral Large (UPDATED 11/24/2024)
const PIXTRAL_LARGE: LLM = {
  modelId: "pixtral-large-latest",
  modelName: "Pixtral Large",
  provider: "mistral",
  hostedId: "pixtral-large-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2,
    outputCost: 6
  }
}

export const MISTRAL_LLM_LIST: LLM[] = [MISTRAL_LARGE, PIXTRAL_LARGE]
