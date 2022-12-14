type studentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array< TechnologiesType >
}

type AddressType = {
    streetTitle: string,
    city: LocalCityType
}

type LocalCityType = {
    title: string,
    countryTitle: string,
}

type TechnologiesType = {
    id: number,
    title: string
}

const student: studentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        }, {
            id: 2,
            title: "CSS"
        }, {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.technologies[2].title)