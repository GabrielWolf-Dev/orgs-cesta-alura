// Assets:
import logo from '../../assets/logo.png';
import tomato from '../../assets/fruits/tomato.png';
import broccoli from '../../assets/fruits/broccoli.png';
import pumpkin from '../../assets/fruits/pumpkin.png';
import cucumber from '../../assets/fruits/cucumber.png';
import potato from '../../assets/fruits/potato.png';


const basket = {
    top: {
        title: "Detalhe da cesta"
    },
    details: {
        name: "Cesta de Verduras",
        nameFarm: "Jenny Jack Farm",
        logo,
        description: "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha",
        price: "R$ 40,00"
    },
    items: {
        title: "Itens da cesta",
        lista: [
            {
              nome: "Tomate",
              imagem: tomato,
            },
            {
              nome: "Brócolis",
              imagem: broccoli,
            },
            {
              nome: "Batata",
              imagem: potato,
            },
            {
              nome: "Pepino",
              imagem: pumpkin,
            },
            {
              nome: "Abóbora",
              imagem: cucumber,
            }
        ]
    }
};

export default basket;