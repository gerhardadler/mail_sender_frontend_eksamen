async function handleMailForm() {
    const form = document.getElementById("mail_form");
    const formData = new FormData(form);

    const response = await fetch("http://192.168.1.200:8000/send-email", {
        method: "POST",
        body: formData,
    });

    const result = await response.json();
    if (response.status !== 200) {
        alert(result.detail);
    } 
}