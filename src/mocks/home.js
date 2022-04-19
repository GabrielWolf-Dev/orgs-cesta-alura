/* Assets */
import green from '../../assets/producers/green.png';
import salad from '../../assets/producers/salad.png';
import jennyJack from '../../assets/producers/jenny-jack.png';
import grow from '../../assets/producers/grow.png';
import potager from '../../assets/producers/potager.png';


const randomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const home = {
    top: {
        welcome: "Olá Gabriel!",
        subtitle: "Encontre os melhores produtores"
    },
    producers: {
        title: "Produtores",
        list: [
            {
                name: "Green",
                img: green,
                distance: `${randomNumbers(1, 500)}m`,
                stars: randomNumbers(1, 5)
            },
            {
                name: "Salad",
                img: salad,
                distance: `${randomNumbers(1, 500)}m`,
                stars: randomNumbers(1, 5)
            },
            {
                name: "Jenny Jack Farm",
                img: jennyJack,
                distance: `${randomNumbers(1, 500)}m`,
                stars: randomNumbers(1, 5)
            },
            {
                name: "Grow",
                img: grow,
                distance: `${randomNumbers(1, 500)}m`,
                stars: randomNumbers(1, 5)
            }
            ,
            {
                name: "Potager",
                img: potager,
                distance: `${randomNumbers(1, 500)}m`,
                stars: randomNumbers(1, 5)
            }
        ]
    }
};

export default home;