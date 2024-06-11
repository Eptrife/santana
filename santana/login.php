<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['password'];

    $query = "SELECT id, nome, senha FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $nome, $senha_db);
        $stmt->fetch();
        
        if (password_verify($senha, $senha_db)) {
            $_SESSION['loggedin'] = true;
            $_SESSION['id'] = $id;
            $_SESSION['nome'] = $nome;
            header('Location: index.html');
            exit;
        } else {
            echo "<script>alert('Senha incorreta!'); window.location.href = 'login-page.html';</script>";
        }
    } else {
        echo "<script>alert('Usuário não encontrado!'); window.location.href = 'login-page.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
