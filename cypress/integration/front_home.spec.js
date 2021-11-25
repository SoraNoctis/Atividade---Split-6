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

        it.only("Teste de barra de Pesquisa", () => {
            HomePage.pesquisar("peixe")
        })

        it("Teste para Banners *WIP*", () => {
            
        })

        it("Teste para CEP", () => {
            HomePage.visitURL()
            HomePage.checkCEPvibilidade()
        })
    })
})
