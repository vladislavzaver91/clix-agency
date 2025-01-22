-- CreateEnum
CREATE TYPE "ClientStatus" AS ENUM ('standard', 'poor', 'rich');

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(20) NOT NULL,
    "phone_1" VARCHAR(20) NOT NULL,
    "status" "ClientStatus" NOT NULL DEFAULT 'standard',
    "project_type" VARCHAR(50) NOT NULL,
    "budget" VARCHAR(20) NOT NULL,
    "message" TEXT NOT NULL,
    "phone_2" VARCHAR(20),
    "additional_social_network" VARCHAR(50),
    "correspondence" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_name_key" ON "admins"("name");
