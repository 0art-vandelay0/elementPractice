window.addEventListener("load", function() {
    const firstH1 = document.querySelector('h1');
    const body = document.querySelector('body');

    const p = document.createElement('p');
    const img = document.createElement('img');
    const newH1 = document.createElement('h1');
    const newH1again = document.createElement('h1');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const h2 = document.createElement('h2');
    const a = document.createElement('a');

    firstH1.remove();

    newH1.append("Webpage Recreation Practice");
    body.append(newH1);

    p.append("The HTML of this webpage was created with JavaScript.");
    body.append(p);

    img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
    img.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
    body.append(img);

    newH1again.append("Facts about the Multicolored Tanager");

    li1.append("It is endemic to the mountains of Colombia.");
    li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");

    body.append(ul);

    ul.append(li1, li2);

    h2.append("Source");
    body.append(h2);

    a.append("WikiPedia");
    a.href = "https://en.wikipedia.org/wiki/Multicolored_tanager";
    body.append(a);

});