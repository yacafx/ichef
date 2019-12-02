export class AcademyFakeDb {
    public static courses = [
        {
            id: "15459251a6d6b397565",
            title: "Ceviche",
            slug: "ceviche",
            category: "peruana",
            length: 30,
            updated: "Jun 28, 2019"
        },
        {
            id: "154588a0864d2881124",
            title: "Arroz con Pollo",
            slug: "arroz-con-pollo",
            category: "peruana",
            length: 60,
            updated: "Nov 01, 2019"
        },
        {
            id: "15453ba60d3baa5daaf",
            title: "Pozole",
            slug: "pozole",
            category: "mexicana",
            length: 120,
            updated: "Jun 28, 2019"
        },
        {
            id: "15453a06c08fb021776",
            title: "Enchiladas",
            slug: "enchiladas",
            category: "mexicana",
            length: 45,
            updated: "Jun 28, 2018"
        },
        {
            id: "15427f4c1b7f3953234",
            title: "Ratatouille",
            slug: "ratatouille",
            category: "francesa",
            length: 30,
            updated: "Jun 28, 2018"
        },
        {
            id: "1542d75d929a603125",
            title: "Quenelle",
            slug: "quenelle",
            category: "francesa",
            length: 120,
            updated: "Jun 28, 2019"
        },
        {
            id: "1543ee3a5b43e0f9f45",
            title: "Aligot",
            slug: "aligot",
            category: "francesa",
            length: 30,
            updated: "Jun 28, 2018"
        },
        {
            id: "1543cc4515df3146112",
            title: "Sopa Seca",
            slug: "sopa-seca",
            category: "peruana",
            length: 45,
            updated: "Jun 28, 2018"
        },
        {
            id: "154398a4770d7aaf9a2",
            title: "Carapulcra",
            slug: "carapulcra",
            category: "peruana",
            length: 90,
            updated: "Jun 28, 2017"
        },
        {
            id: "15438351f87dcd68567",
            title: "Anticuchos",
            your: "anticuchos",
            category: "peruana",
            length: 90,
            updated: "Jun 28, 2019"
        },
        {
            id: "1544e43dcdae6ebf876",
            title: "Spaghetti a la boloñesa",
            slug: "spaghetti-a-la-bolonesa",
            category: "italiana",
            length: 90,
            updated: "Jun 28, 2017"
        },
        {
            id: "1541ca7af66da284177",
            title: "Ravioles",
            slug: "ravioles",
            category: "italiana",
            length: 45,
            updated: "Jun 28, 2017"
        },
        {
            id: "154297167e781781745",
            title: "Fettuccini Alfredo",
            slug: "fettuccini-alfredo",
            category: "italiana",
            length: 60,
            updated: "Jun 28, 2018"
        },
        {
            id: "154537435d5b32bf11a",
            title: "Formaggio",
            slug: "Formaggio",
            category: "italiana",
            length: 45,
            updated: "Jun 28, 2017"
        },
        {
            id: "154204e45a59b168453",
            title: "Tamales",
            slug: "tamales",
            category: "mexicana",
            length: 45,
            updated: "Jun 28, 2017"
        },
        {
            id: "1541dd1e05dfc439216",
            title: "Tlayudas",
            slug: "tlayudas",
            category: "mexicana",
            length: 30,
            updated: "Jun 28, 2017"
        },
        {
            id: "1532dfc67e704e48515",
            title: "Lomo Saltado",
            slug: "lomo-saltado",
            category: "peruana",
            length: 60,
            updated: "Jun 28, 2019"
        },
        {
            id: "1542e43dfaae6ebf226",
            title: "Cabrito con seco de frijoles",
            slug: "cabrito.-con-.seco-de-frijoles",
            category: "peruana",
            length: 90,
            updated: "Jun 28, 2018"
        }
    ];

    public static categories = [
        {
            id: 0,
            value: "francesa",
            label: "Francesa"
        },
        {
            id: 1,
            value: "italiana",
            label: "Italiana"
        },
        {
            id: 2,
            value: "mexicana",
            label: "Mexicana"
        },
        {
            id: 3,
            value: "peruana",
            label: "Peruana"
        }
    ];

    private static demoSteps = [
        {
            title: "Ingredientes",
            content:
                "<h1>Paso 1 - Obtener los ingredientes</h1>" +
                "<br>" +
                "Los ingredientes para preparar un buen ceviche en ración para una persona son los siguientes: " +
                "<br><br>" +
                "<ul>" +
                "<li>2 filetes gruesos de Tilapia</li>" +
                "<li>8 limones</li>" +
                "<li>1/4 de cebolla morada</li>" +
                "<li>120 gr de sal</li>" +
                "<li>1 camote</li>" +
                "<li>1 elote</li>" +
                "<li>1 elote</li>" +
                "<li>2 hojas de lechuga</li>" +
                "<li>1 Ají amarillo</li>" +
                "</ul>" +
                "<br>" +
                '<img class="course-step-photo" src="/assets/images/ingredientes.jpeg"></img>'
        },
        {
            title: "Acompañamientos",
            content:
                "<h1>Paso 2 - Prepara los acompañamientos</h1>" +
                "<br>" +
                "<p>" +
                "Cocer los camotes y el elote y lavar las hojas de lechuga y el ají amarillo <br><br>" +
                "Una vez lavados los ingredientes cortar el aji amarillo en tiras." +
                "</p>" +
                '<img class="course-step-photo" src="/assets/images/verduras.jpg"></img>'
        },
        {
            title: "Salsa criolla",
            content:
                "<h1>Paso 3 - Preparar la salsa criolla</h1>" +
                "<br><br>" +
                "<p>" +
                "La salsa criolla le da un saber especial al ceviche y es muy sencilla de preparar solo hayq eu cortar" +
                "la cebolla al estilo juliana, depues lavarla para desflemarla." +
                "Se peude poner a reposar en limon o simplemente esperar hasta que el pescado este listo." +
                "</p>" +
                '<img class="course-step-photo" src="/assets/images/salsa_criolla.jpg"></img>'
        },
        {
            title: "Cocer el pescado",
            content:
                "<h1>Paso 4 - Cocer el pescado</h1>" +
                "<br>" +
                "<p>Despues de lavar el pescado hay que cortarlo en trozos medianos y semigruesos. Una vez cortado depositarlo en un recipiente" +
                "con los limones previamente exprimidos. Con los trozos de pescado sumergidos en el jugo de limon agregar la cebolla y la sal. " +
                "Mezclar con un cucharon." +
                "Colocar el recipiente con el pescado en una bolsa de plastico y refrigerar por 20 minutos."+
                "</p>" +
                '<img class="course-step-photo" src="/assets/images/pescado.jpg"></img>'
        },
        {
            title: "Servir el ceviche",
            content:
                "<h1>Paso 5 - Servir el ceviche</h1>" +
                "<br>" +
                "<p>Colocar las hojas de lechuga en un plato plano y alrededor colocar el camote y el elote previamentte partidos en trozos." +
                "En medio del plato servir el pescado cocido en el jugo de limon."+
                "</p>" +
                '<img class="course-step-photo" src="/assets/images/cebiche.jpeg"></img>'
        },
        {
            title: "¡A comer!",
            content:
                "<h1>Paso 6 - ¡A comer!</h1>" +
                "<br>" +
                "¡Listo! <br><br> ¡Te lo has ganado, ahora a degustar un rico y delicioso ceviche!"+
                "<br><br>" +
                '<img class="course-step-photo" src="/assets/images/yo.jpeg"></img>'
        }
    ];

    public static course = [
        {
            id: "15459251a6d6b397565",
            title: "Ceviche",
            slug: "ceviche",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "peruana",
            length: 30,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "154588a0864d2881124",
            title: "Arroz con Pollo",
            slug: "arroz-con-pollo",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "peruana",
            length: 60,
            totalSteps: 6,
            updated: "Nov 01, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "15453ba60d3baa5daaf",
            title: "Pozole",
            slug: "pozole",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "mexicana",
            length: 120,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "15453a06c08fb021776",
            title: "Enchiladas",
            slug: "enchiladas",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "mexicana",
            length: 45,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "15427f4c1b7f3953234",
            title: "Ratatouille",
            slug: "ratatouille",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "cloud",
            length: 30,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1542d75d929a603125",
            title: "Quenelle",
            slug: "quenelle",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "francesa",
            length: 120,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1543ee3a5b43e0f9f45",
            title: "Aligot",
            slug: "aligot",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "francesa",
            length: 30,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1543cc4515df3146112",
            title: "Sopa Seca",
            slug: "sopa-seca",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "peruana",
            length: 45,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "154398a4770d7aaf9a2",
            title: "Carapulcra",
            slug: "carapulcra",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "peruana",
            length: 90,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "15438351f87dcd68567",
            title: "Anticuchos",
            your: "anticuchos",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "peruana",
            length: 90,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1544e43dcdae6ebf876",
            title: "Spaghetti a la boloñesa",
            slug: "spaghetti-a-la-bolonesa",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "italiana",
            length: 90,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1541ca7af66da284177",
            title: "Ravioles",
            slug: "ravioles",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "italiana",
            length: 45,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "154297167e781781745",
            title: "Fettuccini Alfredo",
            slug: "fettuccini-alfredo",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "italiana",
            length: 60,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "154537435d5b32bf11a",
            title: "Formaggio",
            slug: "Formaggio",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "italiana",
            length: 45,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "154204e45a59b168453",
            title: "Tamales",
            slug: "tamales",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "mexicana",
            length: 45,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1541dd1e05dfc439216",
            title: "Tlayudas",
            slug: "tlayudas",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "mexicana",
            length: 30,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1532dfc67e704e48515",
            title: "Lomo Saltado",
            slug: "lomo-saltado",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "peruana",
            length: 60,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        },
        {
            id: "1542e43dfaae6ebf226",
            title: "Cabrito con seco de frejoles",
            slug: "cabrito.-con-.seco-de-frijoles",
            description:
                "Es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos.",
            category: "peruana",
            length: 90,
            totalSteps: 6,
            updated: "Jun 28, 2017",
            steps: AcademyFakeDb.demoSteps
        }
    ];
}
