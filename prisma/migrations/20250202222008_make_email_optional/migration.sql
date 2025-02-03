-- CreateEnum
CREATE TYPE "specialityEnum" AS ENUM ('Frontend', 'Seo', 'FullStack', 'Backend', 'Designer', 'Web3', 'Devops');

-- AlterTable
ALTER TABLE "workers" ADD COLUMN     "contract" VARCHAR(50),
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'USD',
ADD COLUMN     "description" VARCHAR(50),
ADD COLUMN     "documents" VARCHAR(1000)[],
ADD COLUMN     "speciality" "specialityEnum" NOT NULL DEFAULT 'FullStack';
