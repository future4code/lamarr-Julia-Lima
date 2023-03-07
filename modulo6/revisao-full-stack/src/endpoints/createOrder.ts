import { Request, Response } from "express";
import { connection } from "../database/connections";
import { TProduct } from "../models/Products";

export const createOrder = async (req: Request, res: Response) => {
    let codeError = 400;

    try {
        //dados do request 
        const delivery_date = req.body.delivery_date
        const fk_client = req.body.fk_client
        const products:TProduct[] = req.body.products

        if (!delivery_date || !products || !fk_client) {
            throw new Error("Body inválido!");         
        }

        //Verificar Estoque 

        await  products.forEach(async product => {
            const getEstoque = await connection.select("qty_estoque")
            .from("Case_Products")
            .where({id:product.id}) 
            const estoqueAtual = Number(getEstoque[0].qty_estoque)    
        
            if(estoqueAtual < product.qty) {
                throw new Error("Estoque indisponível!")
            }       
        }
        )

        await  products.forEach(async product => {
       
        //adiciona um registro
        await connection("Case_Orders").insert(
            {
                order_date:new Date().toISOString().slice(0,10),
                delivery_date,
                qty: product.qty,
                fk_client,
                fk_product: product.id
            }
        )
        //get estoque
        const getEstoque = await connection.select("qty_estoque")
        .from("Case_Products")
        .where({id:product.id}) 
        const estoqueAtual = Number(getEstoque[0].qty_estoque)

        //atualizar estoque 
        await connection("Case_Products")
        .where({id:product.id})
        .update({qty_estoque:estoqueAtual-product.qty})
    })

        res.status(200).send("Pedido criado com sucesso!")
        
    } catch (error: any) {
        res.status(200).send({message:error.message})
        
    }

}