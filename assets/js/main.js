const arrayRadiologias = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    }
];

const arrayTraumatologias = [
    {
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    }
];

const arrayDentales = [
    {
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
];


// Desafio CLinica V2

// 1. push de nuevos datos Traumatologia

const nuevosDatosTraumatologias = [
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
];

nuevosDatosTraumatologias.forEach(element => {
    arrayTraumatologias.push(element)
});


// 2. Eliminar el primer y último elemento del arreglo de Radiología 

const borraPrimeroUltimoRadiologia = () =>{
    arrayRadiologias.pop()
    arrayRadiologias.shift()
}

borraPrimeroUltimoRadiologia()



// 3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime 
// conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
// separando por un guión cada dato desplegado y cada fila de información debe estar
// separada por un párrafo 

const atencionesDental = document.querySelector('#atencionesDental')

arrayDentales.forEach(elemento => {
    atencionesDental.innerHTML += `
    <p></p>
    <p>${elemento.hora} - ${elemento.especialista} - ${elemento.paciente} - ${elemento.rut} - ${elemento.prevision}</p>`  
});



// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
// Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo 

const atencionesTodo = document.querySelector('#atencionesTodo')

const atencionesNombre = (array) => {
    array.forEach(elemento => {
        atencionesTodo.innerHTML += 
        `<p>${elemento.paciente}</p>`  
    });
}

atencionesNombre(arrayRadiologias)
atencionesNombre(arrayTraumatologias)
atencionesNombre(arrayDentales)


// // 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas 
// de Dental 

const dentalIsapre = document.querySelector('#dentalIsapre')
const filtroDentalIsapre = arrayDentales.filter((elemento)=>elemento.prevision == 'ISAPRE')

filtroDentalIsapre.forEach((elemento)=>{
    dentalIsapre.innerHTML += 
    `<p>${elemento.paciente} - ${elemento.prevision} </p>`
})


// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
// de Traumatología 

const traumaFonasa = document.querySelector('#traumaFonasa')
const filtroTraumaFonasa = arrayTraumatologias.filter((elemento)=>elemento.prevision == 'FONASA')

filtroTraumaFonasa.forEach((elemento)=>{
    traumaFonasa.innerHTML += 
    `<p>${elemento.paciente} - ${elemento.prevision} </p>`
})





// --------------------------------------------------------------------------------------------------------------------

const radiologia = document.querySelector('#primeraUltimaRadio')
const traumatologia = document.querySelector('#primeraUltimaTrauma')
const dental = document.querySelector('#primeraUltimaDental')

const numRadiologia = document.querySelector('#numAtencionesRadio')
const numTraumatologia = document.querySelector('#numAtencionesTrauma')
const numDental = document.querySelector('#numAtencionesDental')

radiologia.textContent = `Primera atencion: ${arrayRadiologias[0].paciente} - ${arrayRadiologias[0].prevision} | Ultima atención: ${arrayRadiologias[arrayRadiologias.length - 1].paciente} - ${arrayRadiologias[arrayRadiologias.length - 1].prevision}`
traumatologia.textContent = `Primera atencion: ${arrayTraumatologias[0].paciente} - ${arrayTraumatologias[0].prevision} | Ultima atención: ${arrayTraumatologias[arrayTraumatologias.length - 1].paciente} - ${arrayTraumatologias[arrayTraumatologias.length - 1].prevision}`
dental.textContent = `Primera atencion: ${arrayDentales[0].paciente} - ${arrayDentales[0].prevision} | Ultima atención: ${arrayDentales[arrayDentales.length - 1].paciente} - ${arrayDentales[arrayDentales.length - 1].prevision}`

numRadiologia.textContent = arrayRadiologias.length
numTraumatologia.textContent = arrayTraumatologias.length
numDental.textContent = arrayDentales.length












