import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/Shema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://aicontent_owner:f1pCQs2AcPIS@ep-royal-tree-a4ysv3a3.us-east-1.aws.neon.tech/aicontent?sslmode=require',
  },
  verbose: true,
  strict: true,
})