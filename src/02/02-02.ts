export type StreetType = {
    title: string
}

export type CityAddressType = {
    number: number,
    street: StreetType
}

type HouseType = {
    builtAt: number,
    repaired: boolean,
    address: CityAddressType
}

type GovernmentAddressType = {
    street: StreetType
}

type GovernmentBuildingsType = {
    type: string,
    budget: number,
    staffCount: number,
    address: GovernmentAddressType
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovernmentBuildingsType>,
    citizensNumber: number,
}