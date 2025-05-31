const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    phone: form.elements["phone"].value,
    subject: form.elements["subject"].value,
    message: form.elements["message"].value
  };

  try {
    const response = await fetch("https://formulario-api.onrender.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar: " + result.message);
    }
  } catch (error) {
    alert("Erro ao conectar com o servidor. Tente novamente.");
  }
});