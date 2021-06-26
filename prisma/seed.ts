import { PrismaClient } from '@prisma/client';
import { toRange } from 'rhodash';

const prisma = new PrismaClient();

export async function seed() {
  for (let u = 1; u <= 10; u++) {
    await prisma.user.create({
      data: {
        name: `user${u}`,
        birthday: new Date(1999, 1 - 1, 1),
        posts: {
          createMany: {
            data: toRange(1, 10).map((p) => ({
              title: `user${u}-post${p}-title`,
              body: `user${u}-post${p}-body`,
            })),
          },
        },
      },
    });
  }
  prisma.$disconnect();
}
