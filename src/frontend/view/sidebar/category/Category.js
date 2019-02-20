import React, {Component} from 'react';

class Category extends Component {
    state = {
        listaCategorie: [
            {id: "1", name: "Colmar"},
            {id: "2", name: "Scervino"}
        ]
    }

    addCategoryHandler = (event) => {
        event.preventDefault();
        let lastId = this.state.listaCategorie[this.state.listaCategorie.length - 1].id;
        const NewCategory = {id: parseInt(lastId) + 1, name: event.target.insertCategory.value}
        const NewListaCategorie = [...this.state.listaCategorie, NewCategory]

        this.setState({
            listaCategorie: NewListaCategorie
        })

        event.target.insertCategory.value = ""
    }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.listaCategorie.map((item, index) => {
                            return <li data-id={item.id} key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
                <form onSubmit={this.addCategoryHandler}>
                    <input placeholder="insert category..." name="insertCategory" type="text"/>
                </form>
            </div>
        )
    }
}

export default Category;