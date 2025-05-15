const translations = {
    es: {
        firstName: "Nombre:",
        lastName: "Apellido:",
        visitors: "Cantidad de visitantes:",
        date: "Fecha de preferencia:",
        submit: "Enviar"
        },
    en: {
        firstName: "First Name:",
        lastName: "Last Name:",
        visitors: "Number of Visitors:",
        date: "Preferred Date:",
        submit: "Submit"
        },
    fr: {
        firstName: "Prénom :",
        lastName: "Nom :",
        visitors: "Nombre de visiteurs :",
        date: "Date préférée :",
        submit: "Envoyer"
        },
    pt: {
        firstName: "Nome:",
        lastName: "Sobrenome:",
        visitors: "Número de visitantes:",
        date: "Data preferida:",
        submit: "Enviar"
        },
    zh: {
        firstName: "名字：",
        lastName: "姓氏：",
        visitors: "参观人数：",
        date: "首选日期：",
        submit: "提交"
        }
    };
    
    function updateForm() {
        const lang = document.getElementById('language').value;
        const t = translations[lang];
    
            document.getElementById('label-firstName').innerText = t.firstName;
            document.getElementById('label-lastName').innerText = t.lastName;
            document.getElementById('label-visitors').innerText = t.visitors;
            document.getElementById('label-date').innerText = t.date;
            document.getElementById('submit-button').innerText = t.submit;
        }
    
    window.onload = updateForm;