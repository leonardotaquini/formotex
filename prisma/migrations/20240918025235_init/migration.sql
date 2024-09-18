/*
  Warnings:

  - You are about to drop the column `price` on the `Equipment` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Equipment` table. All the data in the column will be lost.
  - Added the required column `organization` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equipment" DROP COLUMN "price",
DROP COLUMN "stock",
ADD COLUMN     "organization" TEXT NOT NULL;
