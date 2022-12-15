import React, {useState} from 'react';
import './App.css';
import ArticleList from './ArticleList';
import Header from './Header';
import SearchBox from './SearchBox';

const obj = {
	title: "Parent",
	link: "https://n.news.naver.com/mnews/article/015/0004787552?sid=100",
	id: "A001",
	close_links: [
		{
			title: "Child1",
			link: "https://n.news.naver.com/mnews/article/079/0003717561?sid=100",
			id: "A002"
		},
		{
			title: "Child2",
			link: "https://n.news.naver.com/mnews/article/005/0001573454?sid=100",
			id: "A003"
		}
	]
}

const cats = ["poll", "eco", "soc", "cul", "sci"];

function App() {
	const [link, setLink] = useState("https://n.news.naver.com/mnews/article/015/0004787552?sid=100");
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState(-1);
	const handleInput = (event) => {
		setQuery(event.target.value);
	}
	const updatelink = (link) => {
		setLink(link);
	}
	const updateId = (index) => {
		setCategory(index);
	}
	const runSearch = () => {
		console.log("Search!" + query + category);
	}
  return (
    <div className="App block items-center justify-between p-6 container mx-auto">
		<SearchBox handleInput={handleInput} setId={updateId} runSearch={runSearch}/>
		<Header link={link} />
		<ArticleList links={obj.close_links} setLink={updatelink}/>
    </div>
  );
}

export default App;
