import faker from "faker" 
import fakerBr from "faker-br"

faker.locale = "pt_BR";

export default class Factory {
    static generatorPeople() {
        return {
            "name": `${faker.fake("{{name.firstName}}, {{name.MiddleName}}, {{name.LastName}}, {{name.lastName}}")}`,
            "birthday": `${faker.date.past()}`,
            "email": `${faker.internet.email()}`,
            "cpf": `${fakerBr.cpf()}`,
            "homeNum": `${faker.phone.phoneNumber()}`,
            "phoneNum": `${faker.phone.phoneNumberFormat()}`,
            "password": `${faker.internet.password()}`,
        }
    }

    static generateCompany() {
        return {
            "companyName": `${faker.company.companyName()}`,
            "ie": `${faker.datatype.number(max = 10)}`,
            "cnpj": `${fakerBr.br.cnpj()}`,
            "name": `${faker.fake(`{{name.firstName}}, {{name.MiddleName}}, {{name.LastName}}, {{name.lastName}}`)}`,
            "birthday": `${faker.date.past()}`,
            "cpf": `${fakerBr.br.cpf()}`,
        }
    }

    static generateAddress() {
        return {
            "cep": `${faker.address.zipCode()}`,
            "address": `${faker.address.streetName()}`,
            "addresssNUM": `${faker.address.streetAddress().length(4)}`,
            "complement": `${faker.lorem.lines()}`,
            "streetSuffix": `${faker.address.streetSuffix()}`,
            "city": `${faker.address.city()}`,
            "state": `${faker.address.stateAbbr()}`,
            "conty": `${faker.address.county()}`,

        }
    }

    static autoAddress() {
        return {
            "cep": `${fakerBr.address.zipCode()}`,
            "addresssNUM": `${faker.datatype.number(max = 4)}`,
            "complement": `${fakerBr.lorem.lines()}`
        }
    }

}
