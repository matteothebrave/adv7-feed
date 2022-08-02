// exportação específica para importar com chaves.
// Se tiver alguma troca com na importação, o código quebra, então o específico funciona melhor
// Pois se tiver alguma refatoração futura, é mais fácil de localizar os erros.

export function Post(props) {
  return <div>    <strong>{props.author}</strong>
                  <p>{props.content}</p>



          </div>



}

