import { ModelProvider } from "."

export type LLMID =
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID

// OpenAI Models (UPDATED 5/13/24)
export type OpenAILLMID =
  | "gpt-4o" // GPT-4o
  | "gpt-4o-mini" // GPT-4o-mini
  | "o1-mini" // o1-mini

// Google Models
export type GoogleLLMID =
  | "gemini-1.5-flash-8b" // Gemini 1.5 Flash
  | "gemini-1.5-flash-latest" // Gemini Pro
  | "gemini-1.5-pro" // Gemini 1.5 Pro

// Anthropic Models
export type AnthropicLLMID =
  | "claude-3-5-haiku-latest" // Claude 3.5 Haiku
  | "claude-3-5-sonnet-latest" // Claude 3.5 Sonnet

// Mistral Models
export type MistralLLMID =
  | "pixtral-large-latest" // Pixtral  |
  | "mistral-large-latest" // Mistral Large

export type GroqLLMID = "llama-3.3-70b-versatile" // LLaMA3.3-70b

// Perplexity Models (UPDATED 1/31/24)
export type PerplexityLLMID = "llama-3.1-sonar-huge-128k-online" // Perplexity Online 70B
export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
