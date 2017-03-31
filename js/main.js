window.addEventListener("load", function (e) {
    var añadir   = document.getElementById("añadir");
añadir.addEventListener('click',function(e) {
  e.preventDefault();
    var texto    = document.getElementById("contenedor-post").value ;
    var imprimir = document.getElementById("impresion");
    var autor    = document.getElementById("autor").value;
    var post     = document.createElement('p');

    post.innerHTML = autor + ": " + texto;
    imprimir.prepend(post);
  });
});
