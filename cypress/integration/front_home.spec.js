/// <reference types="cypress" />

import SmartComerci from "../pages/_base.page.js";
import HomePage from "../pages/smartcomerci_homepage.js"

describe("Teste Frontend SmartComerci - Homepage", () => {
    describe("Testes positivos", () => {
        it.only("Teste de barra de Pesquisa", () => {
            HomePage.pesquisar("peixe")
        })

        it("Teste para Banners *WIP*", () => {

        })

        it("Teste para Sidebar", () => {

        })

        it("Teste para Header"), () => {
            SmartComerci.clickHomeHeader()
            SmartComerci.validadeHomePage()
        }

        it("Teste para Footer"), () => {
            SmartComerci.clickHomeHeader()
        }
    })
})
