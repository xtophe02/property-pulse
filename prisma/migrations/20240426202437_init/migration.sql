-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "square_feet" INTEGER NOT NULL,
    "amenities" TEXT[],
    "ratesId" TEXT NOT NULL,
    "sellerInfoId" TEXT NOT NULL,
    "images" TEXT[],
    "is_featured" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rates" (
    "id" TEXT NOT NULL,
    "weekly" INTEGER NOT NULL,
    "monthly" INTEGER NOT NULL,
    "nightly" INTEGER NOT NULL,

    CONSTRAINT "Rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "SellerInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_ratesId_fkey" FOREIGN KEY ("ratesId") REFERENCES "Rates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_sellerInfoId_fkey" FOREIGN KEY ("sellerInfoId") REFERENCES "SellerInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
