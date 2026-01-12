import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const [mode, setMode] = useState("signup");
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

    if (!form.email || !form.password) return;

    if (mode === "signup") {
      if (
        !form.nombre ||
        !form.confirmPassword ||
        !form.terms ||
        form.password !== form.confirmPassword
      ) {
        return;
      }
    }

    navigate("/admin");
  };

  return (
    <div className="nebula-auth-wrapper">
      <div className="nebula-auth-card">

        <h1 className="nebula-logo">BIENVENIDO</h1>

        <div className="nebula-tabs">
          <span
            className={mode === "signup" ? "active" : ""}
            onClick={() => setMode("signup")}
          >
            SIGN UP
          </span>
          <span
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            LOG IN
          </span>
          <div className={`tab-indicator ${mode}`} />
        </div>

        <Form
          className={`nebula-form ${mode}`}
          onSubmit={handleSubmit}
        >
          {mode === "signup" && (
            <Form.Group>
              <Form.Control
                placeholder="Nombre completo"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email ID"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
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
              <Form.Group>
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
                className="nebula-check"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                required
              />
            </>
          )}

          <div className="d-flex gap-3">
            {mode === "signup" && (
              <Button type="submit" className="search-btn">
                REGISTER
              </Button>
            )}

            {mode === "login" && (
              <Button type="submit" className="search-btn">
                LOG IN
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
