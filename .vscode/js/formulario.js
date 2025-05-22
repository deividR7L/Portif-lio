const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: form[0].value,
    email: form[1].value,
    phone: form[2].value,
    subject: form[3].value,
    message: form[4].value
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