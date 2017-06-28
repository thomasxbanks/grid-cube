"use strict"

const template = (post) => {
	return `
    <article class="item-${post.size}">
      <img src="${post.hero}" />
      <div class="inner">
        <h2 style="box-shadow: inset 0 -2px 0 #${post.color};">${post.title}</h2>
        <p>${post.excerpt}</p>
        <a href="#">Read more <span class="arrow">&rsaquo;</span><span class="underline" style="box-shadow: inset 0 -4px 0  #${post.color};"></span></a>
      </div>
    </article>
  `
}

window.onload = () => {

	axios.get('data/data.json').then(function(response) {
		const data = response.data
		data.forEach((post) => {
			document.querySelector('main').innerHTML += template(post)
		})

		// Log for debug
		console.log(data)

	}).catch(function(error) {
		// Log for debug
		console.error(error)
	})

}
