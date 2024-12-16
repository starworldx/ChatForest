import { LLM } from "@/types"

const ANTHROPIC_PLATFORM_LINK =
  "https://docs.anthropic.com/claude/reference/getting-started-with-the-api"

// Claude 3.5 Haiku (UPDATED 11/24/2024)

const CLAUDE_HAIKU: LLM = {
  modelId: "claude-3-5-haiku-latest",
  modelName: "claude 3.5 Haiku",
  provider: "anthropic",
  hostedId: "claude-3-5-haiku-latest",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1,
    outputCost: 5
  }
}
// Claude 3.5 Sonnet (UPDATED 11/24/2024)
const CLAUDE_SONNET: LLM = {
  modelId: "claude-3-5-sonnet-latest",
  modelName: "Claude 3.5 Sonnet",
  provider: "anthropic",
  hostedId: "claude-3-5-sonnet-latest",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

export const ANTHROPIC_LLM_LIST: LLM[] = [CLAUDE_HAIKU, CLAUDE_SONNET]
