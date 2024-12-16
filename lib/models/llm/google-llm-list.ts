import { LLM } from "@/types"

const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"

// Google Models (UPDATED 11/24/2024) -----------------------------

// Gemini 1.5 Flash Latest
// BEST FOR IMAGE, AUDIO and VIDEO UNDERSTANDING
const GEMINI_1_5_FLASH: LLM = {
  modelId: "gemini-1.5-flash-latest",
  modelName: "Gemini-flash-MultiModal",
  provider: "google",
  hostedId: "gemini-1.5-flash-latest",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.08,
    outputCost: 0.3
  }
}

// Gemini 1.5 Flash 8B
// BEST FOR SUMMRIZATION AND MULTI-LINGUAL
const GEMINI_1_5_FLASH_8B: LLM = {
  modelId: "gemini-1.5-flash-8b",
  modelName: "gemini-flash-8b-Summarize+Multi-lingual",
  provider: "google",
  hostedId: "gemini-1.5-flash-8b",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.04,
    outputCost: 0.15
  }
}

// Gemini 1.5 Pro (UPDATED 05/28/24)
//BEST FOR LONG CONTEXT, REASONING, MATH
const GEMINI_1_5_PRO: LLM = {
  modelId: "gemini-1.5-pro",
  modelName: "Gemini Pro-Reason+Math+Long Context",
  provider: "google",
  hostedId: "gemini-1.5-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.25,
    outputCost: 5.0
  }
}

export const GOOGLE_LLM_LIST: LLM[] = [
  GEMINI_1_5_FLASH_8B,
  GEMINI_1_5_FLASH,
  GEMINI_1_5_PRO
]
