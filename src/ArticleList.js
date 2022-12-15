import './ArticleList.css';
function ArticleList(prop) {
	return (
		<div className="ArticleList shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6">
			<h2 className="text-3xl font-bold">관련 기사</h2>
			<ul>
				{prop.links.map((element) => <li><p><a href={element.link} target="_blank" rel="noreferrer" onClick={() => prop.setLink(element.link)}>{element.title}</a></p></li>)}
			</ul>
		</div>
	);
}

export default ArticleList;
