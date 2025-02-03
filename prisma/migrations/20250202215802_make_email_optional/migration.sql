-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "workersId" INTEGER;

-- CreateTable
CREATE TABLE "workers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "salary" VARCHAR(50) NOT NULL,
    "phone_1" VARCHAR(50),
    "phone_2" VARCHAR(50),
    "email" VARCHAR(50),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_workersId_fkey" FOREIGN KEY ("workersId") REFERENCES "workers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
