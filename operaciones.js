function suma() 
{
    const a = parseFloat(document.getElementById("PrimerDigito").value);
    const b = parseFloat(document.getElementById("SegundoDigito").value);
    const res = a+b;
    document.getElementById("Res").innerHTML="Resultado: "+res.toString();
}
function resta() 
{
    const a = parseFloat(document.getElementById("PrimerDigito").value);
    const b = parseFloat(document.getElementById("SegundoDigito").value);
    const res = a-b;
    document.getElementById("Res").innerHTML="Resultado: "+res.toString();
}
function multiplicacion() 
{
    const a = parseFloat(document.getElementById("PrimerDigito").value);
    const b = parseFloat(document.getElementById("SegundoDigito").value);
    const res = a*b;
    document.getElementById("Res").innerHTML="Resultado: "+res.toString();
}
function division()
{
    const a = parseFloat(document.getElementById("PrimerDigito").value);
    const b = parseFloat(document.getElementById("SegundoDigito").value);
    const res = a/b;
    document.getElementById("Res").innerHTML="Resultado: "+res.toString();
}
function borrar() 
{
    document.getElementById("Res").innerHTML="Resultado: "+0;
}