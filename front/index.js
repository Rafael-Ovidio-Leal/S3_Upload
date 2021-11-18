
const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")

imageForm.addEventListener("submit", async event => {
  event.preventDefault()
  const file = imageInput.files[0]

  // Obtem url segura do servidor
  const { url } = await fetch("/s3Url").then(res => res.json())
  console.log(url)

  // Upload da imagem direto do bucket
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })

  const imageUrl = url.split('?')[0]
  console.log(imageUrl)

  // Enviar ao servidro para armazenamento de qualquer dado
  
  
  const img = document.createElement("img")
  img.src = imageUrl
  document.body.appendChild(img)
})
