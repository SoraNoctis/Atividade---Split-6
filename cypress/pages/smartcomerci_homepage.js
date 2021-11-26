import faker from "faker";
import Base from "./_base.page.js";
import {ROUTES as RU} from "./components/_rotas.elements.js";
import {SITE_HEADER as SH, HOME_SIDEBAR as SB, SITE_FOOTER as SF, HOME_BANNER as HB, HOME_CEP_FIND as CEPF} from "./components/home.elements.js";

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
        cy.get(SH.BTN_PESQUISAR).click()
        super.validateURL(`${RU.URL_BUSCA}${valor}`)
    }

    static checkCEPvibilidade() {
        super.typeValue(CEPF.INP_CEP, `${faker.address.zipCode()}`)
    }
    
    static validadeHomePage() {
        super.visitURL(RU.URL_HOME)
    }

    static clickOnSubBanner1() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_1)
        super.validateURL(RU.URL_BANNER)
    }

    static clickOnSubBanner2() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_2)
        super.validateURL(RU.URL_BANNER)
    }

    static clickOnSubBanner3() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_3)
        super.validateURL(RU.URL_BANNER)
    }

    static clickOnSubBanner4() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_4)
        super.validateURL(RU.URL_BANNER)
    }

    static clickOnSubBanner5() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_5)
        super.validateURL(RU.URL_BANNER)
    }

    static clickOnSubBanner6() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_6)
        super.validateURL(RU.URL_BANNER)
    }

    static clickOnSubBanner7() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_7)
        super.validateURL(RU.URL_BANNER)
    }

    static clickOnSubBanner8() {
        super.clickOnElement(HB.IMG_MAN_SUBBANNERS_8)
        super.validateURL(RU.URL_BANNER)
    }
}
