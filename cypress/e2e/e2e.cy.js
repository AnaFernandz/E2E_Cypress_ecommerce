/// <reference types= "cypress" />

const perfil = require('../fixtures/perfil.json')
import CheckoutPage from '../support/page_objects/checkout.page'
import checkout from '../fixtures/checkout.json'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    })

    afterEach(() => {
        cy.screenshot()
    }); 
    
    it('Deve selecionar um produto da lista - usando comando customizado', () => {
        cy.visit('produtos')
        cy.addProdutos('Arcadio Gym Short', '33', 'Red', 4)
        

        CheckoutPage.dadosCheckout(
            checkout[1].nome,
            checkout[1].sobrenome,
            checkout[1].empresa,
            checkout[1].pais,
            checkout[1].endereco,
            checkout[1].cidade,
            checkout[1].estado,
            checkout[1].cep,
            checkout[1].telefone,
            checkout[1].email
        )
    });


});






