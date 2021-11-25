export default class Base {

    static getElement(element, index = undefined) {
        let elem;

        if (typeof index != "undefined" || index > 0) {
            elem = cy.get(element, {timeout: Cypress.env("global_timeout")}).eq(index);
        } else {
            elem = cy.get(element, {timeout: Cypress.env("global_timeout")});
        }
        return elem;
    }

    static getElementByXPath(element, index) {
        let elem;

        if (typeof index != "undefined" || index == 0) {
            elem = cy.xpath(element, {timeout: Cypress.env("global_timeout")}).eq(index);
        } else {
            elem = cy.xpath(element, {timeout: Cypress.env("global_timeout")})
        }
        return elem;
    }

    static getElementContaing(text) {
        return cy.contains(text, {timeout: Cypress.env("global_timeout")}).shoud("be.visible");
    }

    static clickOnElement(element, index = undefined, force = false) {
        if (force === true) {
            return this.getElement(element, index).click({force: force});
        } else {
            return this.getElement(element, index).click();
        }
    }

    static typeValue(element, value, force = false) {
        if (force === true) {
            this.getElement(element).type(value, {force: true});
        } else {
            this.getElement(element).type(value);
        }
    }

    static typeValueXPath(element, value, force = false) {
        if(force === true) {
            this.getElementByXPath(element).type(value, {force: true});
        } else {
            this.getElementByXPath(element).type(value);
        }
    }

    static clickOnElement(element, index = undefined, force = false) {
        if (force === true) {
            return this.getElement(element, index).click({ force: true });
        } else {
            return this.getElement(element, index).click();
        }
    }

    static visitURL() {
        cy.visit(`${Cypress.env("base_URL")}`)
    }

    static validateURL(url) {
        cy.url(`${Cypress.env("base_URL")}`).should("include", url);
    }

    static validateText(baseValue, comparingValue) {
        expect(baseValue).to.contains(comparingValue);
    }

    static validateElementText(element, value, index = undefined) {
        this.getElementText(element, index).then((text) => {
            expect(text).to.contains(value);
        })
    }
}
