-- CreateTable
CREATE TABLE "ticketkauf" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "treuebonus" INTEGER NOT NULL,
    "konzert" TEXT NOT NULL,

    CONSTRAINT "ticketkauf_pkey" PRIMARY KEY ("id")
);
