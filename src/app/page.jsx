import { Suspense } from "react"

export default async function () {
  const data = await fetch('https://dummyjson.com/products')
    .then(res => res.json())
  const produtos = data.products


  return (

    <Suspense fallback={<div>Carregando...</div>}>
      <div className="">
        {
          produtos.map((produto) => (
            <div className="w-[200px]" key={produto.id}>
              <h3>{produto.title}</h3>
              <p>{produto.description}</p>
              <img src={produto.thumbnail} alt="" width={200} height={55} />
            </div>
          ))
        }
      </div>
    </Suspense>
  )
} 