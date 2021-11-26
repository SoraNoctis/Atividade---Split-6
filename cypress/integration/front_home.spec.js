/// <reference types="cypress" />

import HomePage from "../pages/smartcomerci_homepage"

describe("Teste Frontend SmartComerci - Homepage", () => {
    describe("Testes positivos", () => {
        before(() => {
            HomePage.visitURL()
        })

        it("Teste para Header", () => {
            HomePage.clickHomeHeader()
        })
        
        it("Teste para Footer",() => {
            HomePage.clickFooterEmpresa()
        })


        describe("Teste para Banners *WIP*", () => {
            it("Sub Banner 1", () => {
                HomePage.clickOnSubBanner1()
            })
            it("Sub Banner 2", () => {
                HomePage.clickOnSubBanner2()
            })
            it("Sub Banner 3", () => {
                HomePage.clickOnSubBanner3()
            })
            it("Sub Banner 4", () => {
                HomePage.clickOnSubBanner4()
            })
            it("Sub Banner 5", () => {
                HomePage.clickOnSubBanner5()
            })
            it("Sub Banner 6", () => {
                HomePage.clickOnSubBanner6()
            })
            it("Sub Banner 7", () => {
                HomePage.clickOnSubBanner7()
            })
            it("Sub Banner 8", () => {
                HomePage.clickOnSubBanner8()
            })
        })

        it("Teste para CEP", () => {
            HomePage.visitURL()
            HomePage.checkCEPvibilidade()
        })
    })

    describe ("Testes Negativos", () => {
        it("Teste de barra de Pesquisa", () => {
            HomePage.pesquisar("peixe")
        })
    })
})
