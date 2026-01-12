import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getLSItems, setLSItems } from "../../utils/function"; // Ajustá la ruta si es necesario
import "./register.css";

function Register() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpiamos errores previos

    const listaUsuarios = getLSItems("users") || [];

    if (mode === "signup") {
      // VALIDACIONES
      if (form.password !== form.confirmPassword) {
        return setError("Las contraseñas no coinciden");
      }
      if (!form.terms) {
        return setError("Debes aceptar los términos y condiciones");
      }

      // CREAR USUARIO (Acceso VIP como Admin)
      const nuevoUsuario = {
        username: form.nombre,
        email: form.email,
        password: form.password,
        role: "admin", // Lo creamos como admin de una
        id: Date.now()
      };

      setLSItems("users", [...listaUsuarios, nuevoUsuario]);
      setLSItems("isAdmin", true); // Activamos permiso para el AuthChecker
      setLSItems("userLogueado", nuevoUsuario);
      
      navigate("/admin");

    } else {
      // LÓGICA DE LOGIN (Si el usuario cambia de pestaña)
      const usuarioEncontrado = listaUsuarios.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (usuarioEncontrado) {
        const esAdmin = usuarioEncontrado.role === "admin";
        setLSItems("isAdmin", esAdmin);
        setLSItems("userLogueado", usuarioEncontrado);
        navigate(esAdmin ? "/admin" : "/home");
      } else {
        setError("Credenciales incorrectas");
      }
    }
  };

  return (
    <div className="nebula-auth-wrapper">
      <div className="nebula-auth-card">
        <h1 className="nebula-logo">BIENVENIDO</h1>

        <div className="nebula-tabs">
          <span className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>
            SIGN UP
          </span>
          <span className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>
            LOG IN
          </span>
          <div className={`tab-indicator ${mode}`} />
        </div>

        {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

        <Form className={`nebula-form ${mode}`} onSubmit={handleSubmit}>
          {mode === "signup" && (
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Nombre completo"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email ID"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {mode === "signup" && (
            <>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Check
                label="I agree with terms & conditions"
                className="nebula-check mb-3"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />
            </>
          )}

          <div className="d-grid">
            <Button type="submit" className="search-btn">
              {mode === "signup" ? "REGISTER" : "LOG IN"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;