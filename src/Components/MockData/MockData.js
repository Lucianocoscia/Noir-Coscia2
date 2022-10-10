/* import product1 from '../../images/buzo.jpg'
import product2 from '../../images/pantalon-creme.jpg'
import product3 from '../../images/producto1.jpg'
import product4 from '../../images/pant-black.jpg'
import product5 from '../../images/creme.jpg'
import product6 from '../../images/producto.jpg'
import product7 from '../../images/producto3.jpg'
import product8 from '../../images/jacket.jpg'
import product9 from '../../images/remera00.jpg'
import product10 from '../../images/remera01.jpg'
import product11 from '../../images/abrigo10.jpg'
import product12 from '../../images/remera03.jpg'
import product13 from '../../images/remera04.jpg'
import product14 from '../../images/remera05.jpg'
import product15 from '../../images/remera06.jpg'
import product16 from '../../images/remera07.jpg'
import product17 from '../../images/pantalon00.jpg'
import product18 from '../../images/pantalon01.jpg'
import product19 from '../../images/pantalon02.jpg'
import product20 from '../../images/pantalon03.jpg'
import product21 from '../../images/pantalon04.jpg'
import product22 from '../../images/pantalon05.jpg'
import product23 from '../../images/pantalon06.jpg'
import product24 from '../../images/pantalon07.jpg'
import product25 from '../../images/pantalon08.jpg'
import product26 from '../../images/pantalon09.png'
import product27 from '../../images/abrigo06.png'
import product28 from '../../images/abrigo01.jpg'
import product29 from '../../images/abrigo02.jpg'
import product30 from '../../images/abrigo03.png'
import product31 from '../../images/abrigo04.jpg'
import product32 from '../../images/abrigo05.jpg'
const data = [
    {
        id: '1',
        title: 'Producto1',
        description:'Buzo oversized, color azul, con calze holgado y canchero.' ,
        category: 'Abrigos' ,
        price: 100,
        image: product1
    },
    {
        id: '2',
        title: 'Producto2',
        description:'Pantalon beige cargo, holgado en las puntas' ,
        category: 'Pantalones' ,
        price: 100,
        image: product2
    },
    {
        id: '3',
        title: 'Producto3',
        description:'Riñonera beige, para llevar todo lo que se te ocurra, necesaria para todas tus salidas' ,
        category: 'Abrigos' ,
        price: 100,
        image: product3
    },
    {
        id: '4',
        title: 'Producto4',
        description:'Pantalon cargo negro, con puntas mas ajustadas.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product4
    },
    {
        id: '5',
        title: 'Producto5',
        description:'Remera oversize color crema.' ,
        category: 'Remeras' ,
        price: 100,
        image: product5
    },
    {
        id: '6',
        title: 'Producto6',
        description:'Pantalon cargo beige, con 6 bolsillos.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product6
    },
    {
        id: '7',
        title: 'Producto7',
        description:'Remera oversize color celeste ideal para la temporada q se avecina.' ,
        category: 'Remeras' ,
        price: 100,
        image: product7
    },
    {
        id: '8',
        title: 'Producto8',
        description:'Campera de Jean oversize color claro.' ,
        category: 'Abrigos' ,
        price: 100,
        image: product8
    },
    {
        id: '9',
        title: 'Remera Oversize',
        description:'Remera Oversize con estampa.' ,
        category: 'Remeras' ,
        price: 100,
        image: product9
    },
    {
        id: '10',
        title: 'Remera Oversize',
        description:'Remera Oversize negra logo en lado izquierdo.' ,
        category: 'Remeras' ,
        price: 100,
        image: product10
    },
    {
        id: '11',
        title: 'Producto11',
        description:'Campera de Jean oversize color claro.' ,
        category: 'Abrigos' ,
        price: 100,
        image: product11
    },
    {
        id: '12',
        title: 'Remera Oversize',
        description:'Remera Oversize con logo en lado izquierdo.' ,
        category: 'Remeras' ,
        price: 100,
        image: product12
    },
    {
        id: '13',
        title: 'Remera Oversize',
        description:'Remera Oversize color blanca con estampa.' ,
        category: 'Remeras' ,
        price: 100,
        image: product13
    },
    {
        id: '14',
        title: 'Remera Oversize',
        description:'Remera Oversize color gris.' ,
        category: 'Remeras' ,
        price: 100,
        image: product14
    },
    {
        id: '15',
        title: 'Remera Oversize',
        description:'Remera Oversize color blanca.' ,
        category: 'Remeras' ,
        price: 100,
        image: product15
    },
    {
        id: '16',
        title: 'Remera Oversize',
        description:'Remera Oversize color naranja.' ,
        category: 'Remeras' ,
        price: 100,
        image: product16
    },
    {
        id: '17',
        title: 'Cargo',
        description:'Pantalon cargo color negro.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product17
    },
    {
        id: '18',
        title: 'Jogger ',
        description:'Pantalon Jogger color jean.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product18
    },
    {
        id: '19',
        title: 'Cargo',
        description:'Pantalon cargo color verde militar.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product19
    },
    {
        id: '20',
        title: 'Jogger',
        description:'Pantalon Jogger color jean.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product20
    },
    {
        id: '21',
        title: 'Jogger',
        description:'Pantalon Jogger color jean.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product21
    },
    {
        id: '22',
        title: 'Jogger',
        description:'Pantalon Jogger color jean.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product22
    },
    {
        id: '23',
        title: 'Cargo Corderoy',
        description:'Pantalon cargo corderoy color verde.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product23
    },
    {
        id: '24',
        title: 'Cargo',
        description:'Pantalon cargo color gris.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product24
    },
    {
        id: '25',
        title: 'Cargo',
        description:'Pantalon cargo color negro.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product25
    },
    {
        id: '26',
        title: 'Cargo',
        description:'Pantalon cargo color verde claro.' ,
        category: 'Pantalones' ,
        price: 100,
        image: product26
    },
    {
        id: '27',
        title: 'Puffer',
        description:'Campera Puffer color azul.' ,
        category: 'Abrigos' ,
        price: 100,
        image: product27
    },
    {
        id: '28',
        title: 'Puffer',
        description:'Campera Puffer color crema.' ,
        category: 'Abrigos' ,
        price: 100,
        image: product28
    },
    {
        id: '29',
        title: 'Puffer',
        description:'Campera Puffer color blanca.' ,
        category: 'Abrigos' ,
        price: 100,
        image: product29
    },
    {
        id: '30',
        title: 'Puffer',
        description:'Campera Puffer color verde' ,
        category: 'Abrigos' ,
        price: 100,
        image: product30
    },
    {
        id: '31',
        title: 'Puffer',
        description:'Campera Puffer color negra' ,
        category: 'Abrigos' ,
        price: 100,
        image: product31
    },
    {
        id: '32',
        title: 'Puffer',
        description:'Campera Puffer color marron' ,
        category: 'Abrigos' ,
        price: 100,
        image: product32
    },
]
export default data  */