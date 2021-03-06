// Assets:
import logoFarm from '../../assets/logo-farm.png';
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
        logo: logoFarm,
        description: "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha",
        price: "R$ 40,00",
        buttonText: "Comprar"
    },
    items: {
        title: "Itens da cesta",
        list: [
            {
              name: "Tomate",
              image: tomato,
            },
            {
              name: "Brócolis",
              image: broccoli,
            },
            {
              name: "Batata",
              image: potato,
            },
            {
              name: "Pepino",
              image: pumpkin,
            },
            {
              name: "Abóbora",
              image: cucumber,
            }
        ]
    }
};

export default basket;