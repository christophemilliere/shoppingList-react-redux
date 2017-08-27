import React from 'react';
import Article from './Article';
import '../style.css';

const ItemList = (props) => {
	return(
		<div>
			<h3>Vos liste(s) de course(s)</h3>
			<div>
				{
					props.articles.map( article => <Article data={article}  key={article.id} editArticle={props.editArticle} removeArticle={props.removeArticle}/> )
				}
			</div>
		</div>
	);
};

export default ItemList;