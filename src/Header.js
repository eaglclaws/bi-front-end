import './App.css';

function Header(prop) {
	return (
		<div className="Header">
			<h1 className="text-4xl font-medium text-gray-700 text-center mt-6">현재 기사</h1>
			<a className="mt-6 text-indigo-500 font-medium mb-3" href={prop.link} target="_blank" rel="noreferrer">{prop.link}</a>
		</div>		
	);
}

export default Header;
