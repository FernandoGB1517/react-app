import PropTypes from "prop-types"
import { ProductDetails } from "./ProductDetails"

export const ProductGrid = ( {handlerSelected, handlerRemove, products = []} ) => {
    return(
        <>
            <table className="table table-hover table-striped table-">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        {/* <th>update</th>
                        <th>remove</th> */}
                    </tr>
                </thead>
                <tbody>
                    {products.map( product => {
                        return <ProductDetails handlerSelected={handlerSelected} handlerRemove={handlerRemove} product ={product} key={product.id}/>
                    })}
                </tbody>
            </table>
        </>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSelected: PropTypes.func.isRequired
}