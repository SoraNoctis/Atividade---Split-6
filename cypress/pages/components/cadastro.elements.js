export const CADASTRO_PESSOAL = {
    INP_NOME                   : `[class = "board"] [name="pf_nome_cliente"]`,
    INP_NASCIMENTO             : `[class = "board"] [name="pf_data_nascimento"]`,
    INP_CPF                    : `[class = "board"] [name="pf_cpf_cliente"]`,
    //INP_RG                   : `[class = "board"] [name="pf_rg"]`, // As vezes aparece e some sem razão????
    INP_EMAIL                  : `[class = "board"] [name="email_cliente"]`,
    INP_SENHA                  : `[class = "board"] [name="senha_cliente"]`,
    INP_SENHA_2                : `[class = "board"] [name="senha_cliente2"]`,
    INP_CELFIX                 : `[class = "board"] [name="telefone_cliente"]`,
    INP_CELMOB                 : `[class = "board"] [name="telefone_cliente_2"]`
}

export const CADASTRO_JURIDICO = {
    INP_RAZAOSOCIAL            : `[class = "board"] [id="razao_social"]`,
    INP_INSCRICAOESTADUAL      : `[class = "board"] [id="ie"]`,
    INP_CNPJ                   : `[class = "board"] [id="cnpj"]`,
    INP_JUR_NOME               : `[class = "board"] [id="pj_nome_cliente"]`,
    INP_JUR_NASCIMENTO         : `[class = "board"] [id="pj_data_nascimento"]`,
    INP_JUR_CPF                : `[class = "board"] [id="pj_cpf_cliente"]`
}

export const CADASTRO_ENTREGA = {
    INP_CEP1                   : `[class = "board"] [name="cep_1"]`,
    INP_CEP2                   : `[class = "board"] [name="cep_2"]`,
    INP_ENDERECO               : `[class = "board"] [name="endereco_cliente"]`,
    INP_NUMHOME                : `[class = "board"] [name="numero_endereco"]`,
    INP_COMPLEMENTO            : `[class = "board"] [name="complemento"]`,
    INP_BAIRRO                 : `[class = "board"] [name="bairro_cliente"]`,
    INP_CIDADE                 : `[class = "board"] [name="cidade_cliente"]`,
    BTN_REGIAO                 : `[class = "board"] [name="estado_cliente"]`,
    INP_PAIS                   : `[class = "board"] [name="pais"]`,
}

export const CADASTRO_COBRANCA = {
    INP_COB_CEP1               : `[class = "board"] [name="cobranca_cep_1"]`,
    INP_COB_CEP2               : `[class = "board"] [name="cobranca_cep_2"]`,
    INP_COB_END                : `[class = "board"] [name="cobranca_endereco"]`,
    INP_COB_ENDNUM             : `[class = "board"] [name="cobranca_numero_endereco"]`,
    INP_COB_COMPLE             : `[class = "board"] [name="cobranca_complemento"]`,
    INP_COB_BAIRRO            : `[class = "board"] [name="cobranca_bairro"]`,
    INP_COB_CIDADE             : `[class = "board"] [name="cobranca_cidade"]`,
    BTN_COB_REG                : `[class = "board"] [name="cobranca_estado"]`,
    INP_COB_PAIS               : `[class = "board"] [name="cobranca_pais"]`
}

export const CADASTRO_EXTRA = {
    BTN_PESSOA_FISICA          : `[id = "PessoaFisica"]`,
    BTN_PESSOA_JURIDICA        : `[id = "PessoaJuridica"]`,
    BTN_EMAIL_PROMO            : `//*[@id="email"]`,
    BTN_CHECKBOX_COB           : `[class = "board"] [name="endereco_cobranca_diferente"]`,
    BTN_AVANCAR                : `[class = "botao-commerce botao-prosseguir-cadastro right"]`,
}