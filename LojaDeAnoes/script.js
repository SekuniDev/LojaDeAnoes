class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();
        if(this.validaCampos(produto)) {
            this.adicionar(produto);
        }
        this.listaTabela();
        this.excluir();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valorProduto;
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valorProduto = document.getElementById('valor').value;
        return produto;
    }

    validaCampos(produto) {
        let msg = '';
        if(produto.nomeProduto == '') {
            msg += '-Informe o Nome do Anão. \n';
        }
        if(produto.valorProduto == '') {
            msg += '-Informe o Valor do Anão. \n';
        }
        if(msg != '') {
            alert(msg);
            return false
        }
        return true;
    }

    excluir() {
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
    }
}

var produto = new Produto();