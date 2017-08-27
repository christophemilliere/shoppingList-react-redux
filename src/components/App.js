import React from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class App extends React.Component {
	state = {articles: [] };

		// addArticle = (article) => {
		// 	let oldArticles = this.state.articles;
		// 	article.id = Date.now();
		// 	let newArticles = [...oldArticles ,article]
		// 	this.setState({articles: newArticles})
		// 	console.log(newArticles);
		// }

		// addArticle = (article) => {
		// 	this.props.dispatch({ type: 'ADD_ARTICLE', payload: article});
		// 	this.props.addArticle(article);
		// }
	render(){
			return(
				<div>
					<h3>Liste des courses</h3>
					<Form formTitle="Ajouter des articles à acheter" addArticle={this.props.addArticle} />
					<ItemList articles={this.props.articles} editArticle={this.props.editArticle} removeArticle={this.props.removeArticle}/>
				</div>
			)
	}
} // end class

const addArticleActionCreator = (article) => {
	return {
		type: 'ADD_ARTICLE',
		payload: article
	}
};

const removeArticleActionCreator = (article) => {
	return {
		type: 'REMOVE_ARTICLE',
		payload: article
	}
};

const editArticleActionCreator = (article) => {
	return {
		type:'EDIT_ARTICLE',
		payload: article
	}
}
const mapStateToProps = (state) => {
  return {
      articles: state.articles
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addArticle: (article) => {
			dispatch(addArticleActionCreator(article));
		},
		editArticle: (article) => {
			dispatch(editArticleActionCreator(article));
		},
		removeArticle: (article) => {
			dispatch(removeArticleActionCreator(article));
		}
	}
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);