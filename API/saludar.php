<?php
header("Content-Type: application/json");
// Leer los datos enviados desde JavaScript
$datos = json_decode(file_get_contents("php://input"), true);
// Obtener el nombre enviado
$nombre = $datos["nombre"];
// Obtener la edad enviada
$edad = $datos["edad"];
// Crear el mensaje de respuesta
$mensaje = "Hola $nombre. Tenés $edad años.";
// Enviar la respuesta en formato JSON
echo json_encode([
"mensaje" => $mensaje
]);
?>