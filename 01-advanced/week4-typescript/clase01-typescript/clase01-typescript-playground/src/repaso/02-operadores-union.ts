type Resultado = "ok" | "error"

function imprimir (r: Resultado) {
  console.log(r)
}

imprimir("ok")
imprimir("error")
imprimir("otro")

