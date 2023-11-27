function sprawdzPole(pole_id, obiektRegex) {
//Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
//pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
//Parametry funkcji:
//pole_id - id sprawdzanego pola tekstowego
//obiektRegex - wyrażenie regularne
//---------------------------------
    var obiektPole = document.getElementById(pole_id);
    return obiektRegex.test(obiektPole.value);
}


function sprawdz_radio(nazwa_radio) {
//Funkcja sprawdza czy wybrano przycisk radio
//z grupy przycisków o nazwie nazwa_radio
//---------------------------------------
    var obiekt = document.getElementsByName(nazwa_radio);
    for (i = 0; i < obiekt.length; i++) {
        wybrany = obiekt[i].checked;
        if (wybrany) return true;
    }
    return false;
}

function sprawdz_box(box_id) {

    var obiekt = document.getElementById(box_id);
    return obiekt.checked;
}

function sprawdz() {
    var ok = true;
    obiektNazw = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektPhone = /^[0-9]{9}$/;
    //Sprawdzanie kolejnych pól formularza.
    //w przypadku błędu - pojawia się odpowiedni komunikat
    if (!sprawdzPole("name", obiektNazw)) {
        ok = false;
        document.getElementById("name_error").style.display = "block";
        document.getElementById("name_error").innerHTML =
            "Wpisz poprawnie imię!";
        document.getElementById("name_error").style.color = "red";
        document.getElementById("name_error").style.backgroundColor="yellow";
        //Uzupełnij – sprawdz kolejne pola formularza
    } else document.getElementById("name_error").style.display = "none";


    if (!sprawdzPole("email", obiektemail)) {
        ok = false;
        document.getElementById("email_error").style.display = "block";
        document.getElementById("email_error").innerHTML =
            "Wpisz poprawny email!";
        document.getElementById("email_error").style.color = "red";
        document.getElementById("email_error").style.backgroundColor="yellow";
    } else document.getElementById("email_error").style.display = "none";

    if (!sprawdzPole("phone", obiektPhone)) {
        ok = false;
        document.getElementById("phone_error").style.display = "block";
        document.getElementById("phone_error").innerHTML =
            "Wpisz poprawny numer!";
        document.getElementById("phone_error").style.color = "red";
        document.getElementById("phone_error").style.backgroundColor="yellow";
    } else document.getElementById("phone_error").style.display = "none";


    let ready = document.querySelector('#osobowe');
// alert(ready.checked);

    if (!(ready.checked)) {
        ok = false;
        document.getElementById("osobowe_error").style.display = "block";
        document.getElementById("osobowe_error").innerHTML = "Proszę zaznaczyć!";
        document.getElementById("osobowe_error").style.color = "red";
        document.getElementById("osobowe_error").style.backgroundColor="yellow";
    } else document.getElementById("osobowe_error").style.display = "none";

    //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
    //typu confirm do zatwierdzenia przez użytkownika:
    var dane = "Następujące dane zostaną wysłane:\n";
    dane += "Imię: " + document.getElementById('name').value + "\n";
    dane += "Email: " + document.getElementById('email').value + "\n";
    dane += "Temat: " + document.getElementById('subject').value + "\n";
    dane += "Telefon: " + document.getElementById('phone').value + "\n";
    dane += "Typ: " + document.getElementById('wybor').value + "\n";
    dane += "Wiadomość: " + document.getElementById('message').value + "\n";
    dane += "\n";

    return ok && window.confirm(dane);
}

function store(){

    if(sprawdz()){
        var item={};
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-';

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        item.name=document.getElementById('name').value;
        item.email=document.getElementById('email').value;
        item.subject=document.getElementById('subject').value;
        item.phone=document.getElementById('phone').value;
        item.wybor=document.getElementById('wybor').value;
        item.message=document.getElementById('message').value;
        localStorage.setItem('item'+date+time, JSON.stringify(item));
    }
}

function redirectback()
{
    window.location.replace("rezerwacja.html");
}
function selectchange()
{
    document.getElementById("name").value="";
    var savedIndex = document.getElementById("itemss").selectedIndex;
    var object= JSON.parse(localStorage.getItem(localStorage.key(savedIndex-1)));
    document.getElementById("name").value=object.name;
    document.getElementById("email").value=object.email;
    document.getElementById("phone").value=object.phone;
    document.getElementById("subject").value=object.subject;
    document.getElementById("wybor").value=object.wybor;
    document.getElementById("message").value=object.message;

}
function update(){

    if(sprawdz()){
        var item={};
        var savedIndex = document.getElementById("itemss").selectedIndex;
        var object= (localStorage.key(savedIndex-1));
        item.name=document.getElementById('name').value;
        item.email=document.getElementById('email').value;
        item.subject=document.getElementById('subject').value;
        item.phone=document.getElementById('phone').value;
        item.wybor=document.getElementById('wybor').value;
        item.wybor=document.getElementById('wybor').value;
        item.message=document.getElementById('message').value;
        localStorage.setItem(object, JSON.stringify(item));
    }

}
function remove(){
    var savedIndex = document.getElementById("items").selectedIndex;
    var object= (localStorage.key(savedIndex-1));
    localStorage.removeItem(object);
    var x = document.getElementById("items");
    x.remove(x.selectedIndex);
    x.selectedIndex=0;
}


function sprawdz1() {
    var ok = true;
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;

    if (!sprawdzPole("subs", obiektemail)) {
        ok = false;
        document.getElementById("email1_error").style.display = "block";
        document.getElementById("email1_error").innerHTML =
            "Wpisz poprawny email!";
        document.getElementById("email1_error").style.color = "red";
        document.getElementById("email1_error").style.backgroundColor="yellow";
    } else document.getElementById("email1_error").style.display = "none";

    //typu confirm do zatwierdzenia przez użytkownika:
    var dane = "Następujące dane zostaną wysłane:\n";
    dane += "Email: " + document.getElementById('subs').value + "\n";
    dane += "\n";

    return ok && window.confirm(dane);
}
function store1(){

    if(sprawdz1()){
        var item={};
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-';
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        item.subs=document.getElementById('subs').value;
        localStorage.setItem('item'+date+time, JSON.stringify(item));
    }
}

function redirectback1()
{
    window.location.replace("index.html");
}
function selectchange1()
{
    var savedIndex = document.getElementById("items").selectedIndex;
    var object= JSON.parse(localStorage.getItem(localStorage.key(savedIndex-1)));
    document.getElementById("subs").value=object.subs;
}
function update1(){

    if(sprawdz1()){
        var item={};
        var savedIndex = document.getElementById("items").selectedIndex;
        var object= (localStorage.key(savedIndex-1));
        item.subs=document.getElementById('subs').value;
        localStorage.setItem(object, JSON.stringify(item));
    }

}
function remove1(){
    var savedIndex = document.getElementById("items").selectedIndex;
    var object= (localStorage.key(savedIndex-1));
    localStorage.removeItem(object);
    var x = document.getElementById("items");
    x.remove(x.selectedIndex);
    x.selectedIndex=0;
}