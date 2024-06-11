<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $senha = $_POST['password'];
    $rSenha = $_POST['password'];

    // Verificar se o usuário já existe
    $query = "SELECT id FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "<script>alert('Usuário já cadastrado!'); window.location.href = 'register-page.html';</script>";
    } else {
        // Inserir novo usuário
        $hashed_password = password_hash($senha, PASSWORD_DEFAULT);
        $query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sss", $nome, $email, $hashed_password);
        if ($stmt->execute()) {
            echo "<script>alert('Usuário cadastrado com sucesso!'); window.location.href = 'login-page.html';</script>";
        } else {
            echo "<script>alert('Erro ao cadastrar usuário!'); window.location.href = 'register-page.html';</script>";
        }
    }

    $stmt->close();
    $conn->close();
}
?>
