const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // Read properties from JSON file
    const filePath = path.join(__dirname, "../data/properties_import.json");
    const rawData = fs.readFileSync(filePath);
    const properties = JSON.parse(rawData);

    // Create properties
    for (const property of properties) {
      const { location, rates, seller_info, ...propertyData } = property;

      const createdLocation = await prisma.location.create({
        data: location,
      });

      const createdRates = await prisma.rates.create({
        data: rates,
      });

      const createdSellerInfo = await prisma.sellerInfo.create({
        data: seller_info,
      });

      await prisma.property.create({
        data: {
          ...propertyData,
          locationId: createdLocation.id,
          ratesId: createdRates.id,
          sellerInfoId: createdSellerInfo.id,
        },
      });
    }

    console.log("Properties seeded successfully.");
  } catch (error) {
    console.error("Error seeding properties:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
