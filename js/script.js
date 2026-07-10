    function abrirVisor(elemento) {
      const modal = document.getElementById("visorGaleria");
      const imgModal = document.getElementById("imgVisor");
      const imgOriginal = elemento.getElementsByTagName('img')[0].src;
      modal.style.display = "flex";
      imgModal.src = imgOriginal;
      document.body.style.overflow = "hidden";
    }

    function cerrarVisor() {
      document.getElementById("visorGaleria").style.display = "none";
      document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("visorGaleria");
      if (event.target == modal) { cerrarVisor(); }
    }
