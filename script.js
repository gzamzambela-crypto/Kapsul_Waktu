async function kirimPesan() {

    const pesan = document.getElementById("pesan").value;

    if(pesan.trim() === ""){
        alert("Tulis pesan terlebih dahulu.");
        return;
    }

    const token = "8309834327:AAHpEDIRR8Q6CnoZgPnJk2HLT19Mw394oTU";
    const chatId = "7553949958";

    const text =
`💌 Pesan baru dari Kapsul Waktu

${pesan}`;

    const url =
`https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            chat_id:chatId,
            text:text
        })
    });

    const status =
    document.getElementById("status-pesan");

    status.innerHTML =
    "✓ Pesanmu sudah terkirim.";
    status.style.opacity = "1";
    document.getElementById("pesan").value = "";
}