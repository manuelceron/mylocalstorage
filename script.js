function loadMyLocalStorage(my_id, my_class){
    alert(localStorage.getItem('enableMyLocalStorage')); 
    document.getElementById('enableMyLocalStorage').checked = localStorage.getItem('enableMyLocalStorage');
    if (document.getElementById('enableMyLocalStorage').checked){
      const myLocalStorage = new MyLocalStorage(document.getElementById(my_id).value,my_class);
      document.getElementById(my_id).addEventListener('change',function(){
        myLocalStorage.setId(this.value);
        myLocalStorage.cleanItems();
        myLocalStorage.recoverData();
      });
      document.getElementById('btnBorrarDatos').addEventListener('click',function(){
        myLocalStorage.borrarDatos();
        myLocalStorage.cleanItems();
      });
      document.getElementById('btnSaveData').addEventListener('click',function(){
        myLocalStorage.saveData();
      });
      document.getElementById('btnRecoverData').addEventListener('click',function(){
        myLocalStorage.recoverData();
      });
      myLocalStorage.recoverData();
    }
    document.getElementById('enableMyLocalStorage').addEventListener('input',function(){
      //alert(this.checked);
      alert(localStorage.getItem('enableMyLocalStorage')); 
      localStorage.setItem('enableMyLocalStorage', this.checked);
      alert(localStorage.getItem('enableMyLocalStorage')); 
    });
  }
/*
cargarArchivo(item, valor) {
//Set file
var baseFile = $.base64.encode(fileObject);
window.localStorage.setItem("file",basefile);
//get file
var outFile = window.localStorage.getItem("file");
}
*/
