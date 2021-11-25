import Base from "./_base.page.js";
import factory from "../dynamics/factory.js";
import {ROUTES as RU} from "./components/_rotas.elements.js";
import {SITE_HEADER as SH, HOME_SIDEBAR as SB, SITE_FOOTER as SF, HOME_CEP_FIND as CEPF} from "./components/home.elements.js";

export class HomePage extends Base {
    
    static clickHomeHeader() {
        super.clickOnElement(SH.IMG_LOGO)
        super.validateURL(RU.URL_HOME)
    }
    
    static pesquisar(valor) {
        super.typeValue(SH.INP_BARRAPESQUISA, valor)
        super.clickOnElement(SH.BTN_PESQUISAR)
        super.validadeURL(RU.URL_BUSCA + valor)
    }

    static checkCEPvibilidade() {
        super.typeValue(CEPF.INP_CEP, factory.autoAddress("cep"))

    }
    
    static validadeHomePage() {
        super.validateURL(RU.URL_HOME)
    }

    static validateBannerPage() {
        super.validateURL(RU.URL_BANNER)
    }

    static clickFooterEmpresa() {
        super.clickOnElement(SF.BTN_FAQ)
        super.validadeURL(RU.URL_EMPRESA)
    }
}
