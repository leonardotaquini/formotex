/*
  Warnings:

  - You are about to drop the `Computer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_userId_fkey";

-- DropTable
DROP TABLE "Computer";

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'available',
    "location" TEXT NOT NULL,
    "acquisition" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);
