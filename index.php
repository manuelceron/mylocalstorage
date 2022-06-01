<?php
  if (!empty($_GET['q'])) {
    switch ($_GET['q']) {
      case 'info':
        phpinfo(); 
        exit;
      break;
    }
  }
?>
<!DOCTYPE html>
<html>
    <head>
      <title>Laragon</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <!-- Si utilizamos componentes de Bootstrap que requieran Javascript agregar estos tres archivos -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="MyLocalStorage.js"></script>       
  </body>
    </head>
    <body>
      <label><input type="checkbox" id="enableMyLocalStorage" value="1"/>Leer Cache</label>
      <label for="codper">ID:</label>
      <input type="number" id="codper" value="<?php echo (isset($_GET['id'])) ? $_GET['id'] : ''; ?>"/>

      <label for="nombre">Nombre:</label>
      <input class="backupLocal" type="text" id="nombre"  value="<?php echo (isset($_GET['nombre'])) ? $_GET['nombre'] : ''; ?>"/>

      <label for="password">password:</label>
      <input class="backupLocal" type="text" id="password"  value="<?php echo (isset($_GET['password'])) ? $_GET['password'] : ''; ?>"/>

      <label for="tipo">Tipo:</label>
      <select class="backupLocal" multiple name="tipo" id="tipo">
        <option value="1" <?php echo (isset($_GET['tipo'])) && $_GET['tipo'] == "1" ? 'selected' : ''; ?>>Primero</option>
        <option value="2" <?php echo (isset($_GET['tipo'])) && $_GET['tipo'] == "2" ? 'selected' : ''; ?>>Segundo</option>
        <option value="3" <?php echo (isset($_GET['tipo'])) && $_GET['tipo'] == "3" ? 'selected' : ''; ?>>Tercero</option>
      </select>

      <input type="button" id="btnSaveData" value="Guardar datos" />
      
      <p id="datos">Pulsa para ver tu nombre y tu password.</p>
      <input type="button" id="btnRecoverData" value="Recuperar datos" />
      <input type="button" id="btnBorrarDatos" value="Borrar datos" />
    </body>
    <script src="script.js"></script>
    <script>
        window.addEventListener('DOMContentLoaded', (event) => {   
          loadMyLocalStorage("codper", "backupLocal");
        });
    </script>
</html>
