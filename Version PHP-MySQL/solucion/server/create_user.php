<?php
  require('conector.php');

  $con = new ConectorBD();
  $con->initConexion('agenda');

  $hash = password_hash('12345', PASSWORD_DEFAULT);

  $data['username']= '"maria.g@mail.com"';
  $data['password']= '"'.$hash.'"';
  $data['nombre']='"Maria Gonzales"';
  $data['fecha_nacimiento']='"1989-12-11"';

  $con->insertData('usuarios', $data);




 ?>
