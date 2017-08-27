import React from 'react';
import '../style.css';

class Article extends React.Component {
	state = { isInEditMode: false }

	editArticle = (article) => {
		this.setState({ isInEditMode: !this.state.isInEditMode });
	}
	removeArticle = (articleId) =>{
		this.props.removeArticle(articleId);
	}

	handleQuantityEdit = (event, article) => {
		event.preventDefault();
		article.quantity = event.target.value;
		this.props.editArticle(article);
	}
	handleNameEdit = (event, article) => {
		event.preventDefault();
		article.name = event.target.value;
		this.props.editArticle(article)
	}

	render(){
		return(
			<div>
			<button className="btn btn-warning btn-xs edit" onClick={() => this.editArticle()}>modif</button>
			<button className="btn btn-danger btn-xs edit" onClick={() => this.removeArticle(this.props.data.id)}>Supp</button>
				{
					this.state.isInEditMode ?
					<span>
						<input type="number" value={this.props.data.quantity} 
									onChange={(event) => this.handleQuantityEdit(event, this.props.data)} />
						<input type="text" value={this.props.data.name} 
									onChange={(event) => this.handleNameEdit(event, this.props.data)} />
					</span>
					: <span>{this.props.data.quantity} : {this.props.data.name}</span>
				}
			</div>
		);
	}
}
// const Article = (props) => {
// 	console.log(props);
// 	return(
// 		<div>
// 			{props.data.quantity} : {props.data.name}
// 		</div>
// 	);
// }

export default Article;