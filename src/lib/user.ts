import z from 'zod'

export const IUser = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  merchantIds: z.array(z.string()),
  sharedMerchantIds: z.array(z.string())
})

export type IUser = z.infer<typeof IUser>
