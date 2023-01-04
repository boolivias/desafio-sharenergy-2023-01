import { PrismaClient } from '@prisma/client'
import { Hash_Provider } from '../../../providers/implementations/Hash_Provider'
const prisma = new PrismaClient()

async function execute() {
  const hash_provider = new Hash_Provider()
  const password = await hash_provider.encrypt('sh@r3n3rgy')

  const admin = await prisma.user.create({
    data: {
      username: 'desafiosharenergy',
      password,
    }
  })

  console.log(`Admin ${admin.username} criado com sucesso!`)
}

execute()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })