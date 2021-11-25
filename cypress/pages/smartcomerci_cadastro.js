import Base from "./_base.page.js";
import factory from "../dynamics/factory.js";
import {ROUTES as RU} from "./components/_rotas.elements.js";
import {CADASTRO_PESSOAL as CP,  CADASTRO_JURIDICO as CJ, CADASTRO_ENTREGA as CE, CADASTRO_COBRANCA as CO, CADASTRO_EXTRA as EX} from "./components/cadastro.elements.js";

export class CadastrarUsuario extends Base {
    static campoCadastroPessoal() {
        const password = `${factory.generatorPeople(password)}`;
        
        super.typeValue(CP.INP_NOME, factory.generatorPeople("name"))
        super.typeValue(CP.INP_NASCIMENTO, factory.generatorPeople("birthday"))
        super.typeValue(CP.INP_CPF, factory.generatorPeople("name"))
        super.typeValue(CP.INP_EMAIL, factory.generatorPeople("email"))
        super.typeValue(CP.INP_SENHA, password)
        super.typeValue(CP.INP_SENHA_2, password)
        super.typeValue(CP.INP_CELFIX, factory.generatorPeople("homeNum"))
        super.typeValue(CP.INP_CELMOB, factory.generatorPeople("phoneNum"))
    }

    static campoCadastroJuridico() {
        super.typeValue(CJ.INP_RAZAOSOCIAL, factory.generateCompany("companyName"))
        super.typeValue(CJ.INP_INSCRICAOESTADUAL, factory.generateCompany("ie"))
        super.typeValue(CJ.INP_CNPJ, factory.generateCompany("cnpj"))
        super.typeValue(CJ.INP_JUR_NOME, factory.generateCompany("name"))
        super.typeValue(CJ.INP_JUR_NASCIMENTO, factory.generateCompany("birthday"))
        super.typeValue(CJ.INP_JUR_CPF, factory.generateCompany("cpf"))
    }

    static campoCadastroEntrega() {
        super.typeValue(CE.INP_CEP1, factory.generateAddress("cep"))
        super.typeValue(CE.INP_CEP2, factory.generateAddress("cep"))
        super.typeValue(CE.INP_ENDERECO, factory.generateAddress("address"))
        super.typeValue(CE.INP_NUMHOME, factory.generateAddress("addressNUM"))
        super.typeValue(CE.INP_COMPLEMENTO, factory.generateAddress("complement"))
        super.typeValue(CE.INP_BAIRRO, factory.generateAddress("streetSuffix"))
        super.typeValue(CE.INP_CIDADE, factory.generateAddress("city"))
        super.typeValue(CE.BTN_REGIAO, factory.generateAddress("state"))
        super.typeValue(CE.INP_PAIS, factory.generateAddress("conty"))
    }

    static campoCobranca() {
        super.typeValue(CO.INP_COB_CEP1, factory.generateAddress("cep"))
        super.typeValue(CO.INP_COB_CEP2, factory.generateAddress("cep"))
        super.typeValue(CO.INP_COB_END, factory.generateAddress("address"))
        super.typeValue(CO.INP_COB_COMPLE, factory.generateAddress("complement"))
        super.typeValue(CO.INP_COB_BAIRRO, factory.generateAddress("streetSuffix"))
        super.typeValue(CO.INP_COB_CIDADE, factory.generateAddress("city"))
        super.typeValue(CO.BTN_COB_REG, factory.generateAddress("state"))
        super.typeValue(CO.INP_COB_PAIS, factory.generateAddress("conty"))
    }

    static autoCampoCobranca() {
        super.typeValue(CO.INP_COB_CEP, factory.autoAddress("cep"))
        super.typeValue(CE.INP_NUMHOME, factory.autoAddress("addressNUM"))
        super.typeValue(CO.INP_COB_COMPLE, factory.autoAddress("complement"))
    }

    static changeToPessoaFisica() {
        super.clickOnElement(EX.BTN_PESSO_FISICA)
    }
    
    static changeToPessoaJuridica() {
        super.clickOnElement(EX.BTN_PESSOA_JURIDICA)
    }

    static changeEmailSpam() {
        super.clickOnElement(EX.BTN_EMAIL_PROMO)
    }

    static changeToCobrancaSeparada() {
        super.clickOnElement(EX.BTN_CHECKBOX_COB)
    }

    static advanceToNextPage() {
        super.clickOnElement(EX.BTN_AVANCAR)
    }

    static validadeCadastroPage() {
        super.validadeURL(RU.URL_CADSTRO)
    }
}
