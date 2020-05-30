import React from "react"

function Form(props) {
    return (
        <form onSubmit={props.getRecipe}>
            <input type="text" name="receipeName"/>
            <button>Search</button>
        </form>
    )
}
export default Form