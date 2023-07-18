export const handleScrollSpy = () => {
	let sectionArr = [];
	const navDesktop = document.querySelector('.nav-desktop');
	const navHeight = navDesktop.getBoundingClientRect().height;
	const sections = document.querySelectorAll('.spy-section');

	const menuItems = document.querySelectorAll(
		'.nav-desktop-anchors .nav-list-item a'
	);

	sections.forEach((sec) => {
		if (window.scrollY <= sec.offsetTop + sec.offsetHeight - (navHeight + 1)) {
			sectionArr.push(sec);
			const currentSec = document.querySelectorAll(
				`[href*="${sectionArr[0].dataset.section}"]`
			);
			menuItems.forEach((item) => item.classList.remove('spy'));
			currentSec.forEach((sec) => {
				sec.classList.add('spy');
			});
		}
	});
};
