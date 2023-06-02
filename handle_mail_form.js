async function handleMailForm() {
    const form = document.getElementById("mail_form");
    const formData = new FormData(form);

    if (!validateMailForm(formData)) return;

    const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        enctype: "multipart/form-data",
        body: formData,
    });

    const result = await response.json();
    if (response.status !== 200) {
        alert(result.detail);
    } 
}

function validateMailForm(formData) {
    if (formData.get("recipients") === "" && formData.get("csv_recipients").size === 0) {
        alert("You must add recipients");
        return false;
    }
    return true;
}