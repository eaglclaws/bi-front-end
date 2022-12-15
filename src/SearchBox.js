import React, {useState} from 'react';
import './App.css'

function SearchBox(prop) {
	const notClicked = "mr-5 text-gray-600 hover:text-white py-2 px-4 uppercase rounded bg-white border border-gray-600 hover:bg-gray-700 shadow-none hover:shadow-lg font-medium transition duration-200";
	const clicked = "mr-5 text-white py-2 px-4 uppercase rounded border border-gray-600 bg-gray-700 shadow-none font-medium transition duration-200"
	const [id, setId] = useState(-1);
	const setIdCallback = (index) => {
		setId(index);
		prop.setId(index);
	}
	return (
		<div className="SearchBox">
			<input onChange={prop.handleInput} className="appearance-none border border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full p-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:gray-purple-600 focus:shadow-outline" id="search" type="text" placeholder="키워드로 검색하세요" />
			<div className="Categories flex items-center justify-center mt-5">
				<button className={parseInt(id) === 0 ? clicked : notClicked} onClick={() => setIdCallback(0)}>
						정치
				</button>
				<button className={parseInt(id) === 1 ? clicked : notClicked} onClick={() => setIdCallback(1)}>
						경제
				</button>
				<button className={parseInt(id) === 2 ? clicked : notClicked} onClick={() => setIdCallback(2)}>
						사회
				</button>
				<button className={parseInt(id) === 3 ? clicked : notClicked} onClick={() => setIdCallback(3)}>
						생활/문화
				</button>
				<button className={parseInt(id) === 4 ? clicked : notClicked} onClick={() => setIdCallback(4)}>
						IT/과학
				</button>
			</div>
			<button onClick={() => prop.runSearch()} className="mt-5 text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
				검색
			</button>
		</div>
	);
}
export default SearchBox;
