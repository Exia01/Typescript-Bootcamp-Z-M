//example, usage and best practices of optional fields in typescript

interface HousePlanInterface {
  houseType: string;
  bedrooms: number;
  bathrooms: number;
  kitchen: boolean;
  livingRoom: boolean;
  garage: boolean;
  pool?: boolean;
  balcony?: boolean;
  fireplace?: boolean;
  patio: boolean;
  terrace: boolean;
  garden?: boolean;
  petsAllowed?: boolean;
  smokingAllowed?: boolean;
}
//function to create a house plan

function createHousePlan( //returns a HousePlanInterface object with optional fields
  houseType: HousePlanInterface['houseType'],
  bedrooms: HousePlanInterface['bedrooms'],
  bathrooms: HousePlanInterface['bathrooms'],
  kitchen: HousePlanInterface['kitchen'],
  livingRoom: HousePlanInterface['livingRoom'],
  garage: HousePlanInterface['garage'],
  pool: HousePlanInterface['pool'] = false,
  balcony: HousePlanInterface['balcony'] = false,
  fireplace: HousePlanInterface['fireplace'] = false,
  patio: HousePlanInterface['patio'],
  terrace: HousePlanInterface['terrace'],
  garden: HousePlanInterface['garden'] = false,
  petsAllowed: HousePlanInterface['petsAllowed'] = false,
  smokingAllowed: HousePlanInterface['smokingAllowed'] = false
): HousePlanInterface {
  return {
    houseType,
    bedrooms,
    bathrooms,
    kitchen,
    livingRoom,
    garage,
    pool,
    balcony,
    fireplace,
    patio,
    terrace,
    garden,
    petsAllowed,
    smokingAllowed,
  };
}

//Example usage

const housePlan1 = createHousePlan(
  'Victorian',
  4,
  2,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
);

console.log(housePlan1); // Output: { houseType: 'Victorian',... }
