import faker from "faker";
import Base from "./_base.page.js";
import {ROUTES as RU} from "./components/_rotas.elements.js";
import {SITE_HEADER as SH, HOME_SIDEBAR as SB, SITE_FOOTER as SF, HOME_CEP_FIND as CEPF} from "./components/home.elements.js";
import { multiply } from "lodash";

export default class HomePage extends Base {
    
    static clickHomeHeader() {
        super.clickOnElement(SH.IMG_LOGO)
        super.validateURL(RU.URL_HOME)
    }

    static clickFooterEmpresa() {
        super.clickOnElement(SF.BTN_FAQ)
        super.validateURL(RU.URL_EMPRESA)
    }
    
    static pesquisar(valor) {
        super.typeValue(SH.INP_BARRAPESQUISA, valor)
        cy.get(SH.BTN_PESQUISAR).click(25, 10, 'waitForAnimations', 'mutiple = true')
        super.validateURL(`${RU.URL_BUSCA}${valor}`)
    }

    static checkCEPvibilidade() {
        super.typeValue(CEPF.INP_CEP, `${faker.address.zipCode()}`)
    }
    
    static validadeHomePage() {
        super.visitURL(RU.URL_HOME)
    }
}
