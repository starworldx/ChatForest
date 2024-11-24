import { LLM } from "@/types"

const MISTRAL_PLATORM_LINK = "https://docs.mistral.ai/"

// Mixtral 8x7B (UPDATED 11/24/2024)
const MIXTRAL_8X7B: LLM = {
  modelId: "open-mixtral-8x7b",
  modelName: "open-mixtral-8x7b",
  provider: "mistral",
  hostedId: "open-mixtral-8x7b",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.7,
    outputCost: 0.7
  }
}

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

export const MISTRAL_LLM_LIST: LLM[] = [
  MIXTRAL_8X7B,
  MISTRAL_LARGE,
  PIXTRAL_LARGE
]
