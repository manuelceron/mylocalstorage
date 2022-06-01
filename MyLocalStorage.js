class MyLocalStorage {
    constructor (id, my_class) {
        this.loadParams(id, my_class);
    }
    loadParams(id, my_class) {
        this.id = id;
        this.items = [];
        document.querySelectorAll("."+my_class).forEach((current, index, array) => {
            this.items.push(current.id);
        });
        var instance = this;
        this.items.forEach(item => {
            document.getElementById(item).addEventListener('change',function(){
                instance.saveData();
            });
        });
        this.items_object = {};
    }
    cleanItems() {
        this.items.forEach(item => {
            document.getElementById(item).value="";
        });
    }
    saveData() {
        for(var key in this.items){
          this.items_object[this.items[key]] = document.getElementById(this.items[key]).value;
        }
        localStorage.setItem(this.id, JSON.stringify(this.items_object));      
    }
    loadItem(item, valor) {
      if(item.value == ""){
                item.value = valor;
                item.style.color = 'black';
                item.title = '';
      }else{
        if(item.value != valor){
          item.style.color = 'red';
          item.title = `Texto en borrador: ${valor}`;
          item.setAttribute('dart', valor);
        }else{
          item.style.color = 'black';
          item.title = '';
        }
      }
    }
    recoverData() {
      var array = localStorage.getItem(this.id);  
        if ((array != undefined)) {
              var localStorageArray = JSON.parse(array);
              for(var key in localStorageArray){
                  this.loadItem(document.getElementById(key), localStorageArray[key]);
              }
        }else{
            for(var key in this.items){
              document.getElementById(this.items[key]).value = "";
            }
            document.getElementById("datos").innerHTML = "No hay datos";
        }
    }
    loadItem(item, valor) {
      if(item.value == ""){
                item.value = valor;
                item.style.color = 'black';
                item.title = '';
      }else{
        if(item.value != valor){
          item.style.color = 'red';
          item.title = `Texto en borrador: ${valor}`;
          item.setAttribute('dart', valor);
        }else{
          item.style.color = 'black';
          item.title = '';
        }
      }
    }
    setId(id) {
        this.id = id;
    }
    borrarDatos() {
        localStorage.removeItem(this.id);
    }
  }